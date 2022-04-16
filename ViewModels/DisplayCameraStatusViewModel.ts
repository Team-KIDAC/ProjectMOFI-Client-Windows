import { RNCamera, TakePictureResponse } from 'react-native-camera';
import { IAttendeeClient, AttendeeClient, ImageDuo } from '../ApiClient/ApiClient';

class DisplayCameraStatus {
    public static frontCamera: RNCamera | null;
    public static sideCamera: RNCamera | null;

    public static frontCameraData: TakePictureResponse | undefined;
    public static sideCameraData: TakePictureResponse | undefined;

    public static takePicturesFromBothCameras = async () => {
        await this.takePictureFromFrontCamera();
        await this.takePictureFromSideCamera();
    }

    public static sendImagesToApi = () => {
        let apiClient: IAttendeeClient = new AttendeeClient();
        apiClient.postRecognizableImageTest(
            new ImageDuo({ base64String: String(this.frontCameraData?.base64) })
        ).then((response: string | null) => console.log(response));

        //apiClient.recognizeImageTest(
        //    new ImageDuo({ base64String: String(this.sideCameraData?.base64) })
        //).then((response: any) => console.log(response));
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
            //await this.takePictureFromFrontCamera();
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

export default DisplayCameraStatus;