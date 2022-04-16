import { RNCamera, TakePictureResponse } from 'react-native-camera';
import { IClient, Client, FileParameter, IImageDuo, ImageDuo } from '../ApiClient/ApiClient';
import DisplayCameraStatusView from '../views/RecognitionMode/DisplayCameraStatusView';

class Constants {
    public static selectedRecognitionComp: number = 0;
}

export default Constants;