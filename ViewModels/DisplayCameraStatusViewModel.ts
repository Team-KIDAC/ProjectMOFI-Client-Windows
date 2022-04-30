import { RNCamera, TakePictureResponse } from 'react-native-camera';
import { AttendanceRecordClient, IAttendanceRecordClient, IRecognitionClient, RecognitionClient } from '../ApiClient/ApiClient';
import CurrentDateTimeGenerator, { ICurrentDateTimeGenerator } from '../Helpers/CurrentDateTimeGenerator';
import Attendee from '../models/AttendeeModel';
import AccessProcessingView from '../views/RecognitionMode/AccessProcessingView';

export default class DisplayCameraStatus {
    public static frontCamera: RNCamera | null;
    public static sideCamera: RNCamera | null;

    public static frontCameraData: TakePictureResponse | undefined;
    public static sideCameraData: TakePictureResponse | undefined;

    public static takePicturesFromBothCameras = async () => {
        await this.takePictureFromFrontCamera();
        await this.takePictureFromSideCamera();
    }

    public static addAttendanceRecord = async () => {
        let attendanceRecordClient: IAttendanceRecordClient = new AttendanceRecordClient();
        await attendanceRecordClient.postAttendanceRecord({
            attendanceRecordId: Attendee.getGeneratedAttendanceRecordId(),
            attendeeId: Attendee.getId(),
            attendeeName: Attendee.getName(),
            imagePath: Attendee.getAttendeeImagePath(),
            attendanceDate: Attendee.getAttendedDate(),
            attendanceTime: Attendee.getAttendedTime()
        });
    }

    public static addAttendeeData = async (_responseJson: any) => {
        let currDateTime: ICurrentDateTimeGenerator = new CurrentDateTimeGenerator();

        await Attendee.setId(String(_responseJson.id));
        await Attendee.setName(String(_responseJson.name));
        await Attendee.setDepartment(String(_responseJson.department));
        await Attendee.setDateAsync(currDateTime.getCurrentDateString());
        await Attendee.setTimeAsync(currDateTime.getCurrentTimeString());
        await Attendee.setAttendeeImagePath(String(_responseJson.id));

        await this.addAttendanceRecord();
    }

    public static sendImagesToApi = async () => {
        let apiClient: IRecognitionClient = new RecognitionClient();
        await apiClient.postRecognizePerson({
            base64String: String(this.frontCameraData?.base64)
        }).then((response: Response | null) => {
            if (response?.status == 200) {
                response?.text().then((_responseText: string) => {
                    AccessProcessingView.isGranted = 1;
                    console.log(_responseText);
                    var _responseJson = JSON.parse(_responseText);

                    this.addAttendeeData(_responseJson);
                });
            }
            else if (response?.status == 404) {
                response?.text().then((_responseText: string) => {
                    console.log(_responseText);
                });
                AccessProcessingView.isGranted = 2;
            }
        });
    }

    public static takePictureFromFrontCamera = async () => {
        try {
            if (DisplayCameraStatus.frontCamera) {
                this.frontCameraData = await this.frontCamera?.takePictureAsync({
                    base64: true,
                    quality: 1
                });
                console.log(this.frontCameraData?.uri);
            }
        }
        catch (ex) {
            console.error(ex);
        }
    }

    public static takePictureFromSideCamera = async () => {
        try {
            if (DisplayCameraStatus.sideCamera) {
                this.sideCameraData = await this.sideCamera?.takePictureAsync({
                    base64: true,
                    quality: 1
                });
                console.log(this.sideCameraData?.uri);
            }
        }
        catch (ex) {
            console.error(ex);
            await this.takePictureFromSideCamera();
        }
    }
}
