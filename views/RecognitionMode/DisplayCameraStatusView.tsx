import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import DisplayCameraStatus from '../../ViewModels/DisplayCameraStatusViewModel';

type MyProps = {
    setSelectedRecognitionComp(compNum: number): void
};
type MyState = {
    accessStatus: number,
    photoId: number,
    takenPhotos: any
};

export default class DisplayCameraStatusView extends React.Component<MyProps, MyState> {
    state: MyState = {
        accessStatus: 0,
        photoId: 0,
        takenPhotos: []
    };

    render() {
        return (
            <View style={{ padding: 50 }}>
                <View style={{ width: "70%", height: "110%", position: 'absolute', top: "20%", right: "70%", borderRadius: 500, borderColor: "brown", borderWidth: 3 }}></View>
                <View style={{ width: "70%", height: "110%", position: 'absolute', bottom: "20%", left: "60%", borderRadius: 500, borderColor: "#2f5c83", borderWidth: 3 }}></View>
                <View style={{ width: "100%", height: "20%", display: 'flex', flexDirection: 'row' }}>
                    <View style={{ width: "25%", height: "70%" }}>
                        <Image source={require('../assets/images/ProjectMOFI_WhiteBackground.jpeg')} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                    </View>
                </View>
                <View style={styles.CameraStatusView}>
                    <View style={styles.DevidedCameraView}>
                        <Text style={styles.CameraTitleText}>Front View</Text>
                        <View style={styles.CameraHookView}>
                            {/*<RNCamera ref={ref => { DisplayCameraStatus.frontCamera = ref; }} style={styles.CameraHook} type={RNCamera.Constants.Type.front} />*/}
                            <RNCamera ref={ref => { DisplayCameraStatus.frontCamera = ref; }} style={styles.CameraHook} type={RNCamera.Constants.Type.back} />
                        </View>
                    </View>
                    <View style={styles.DevidedCameraView}>
                        <Text style={styles.CameraTitleText}>Side View</Text>
                        <View style={styles.CameraHookView}>
                            {/*<RNCamera ref={ref => { DisplayCameraStatus.sideCamera = ref; }} style={styles.CameraHook} type={RNCamera.Constants.Type.back} />*/}
                            <RNCamera ref={ref => { DisplayCameraStatus.sideCamera = ref; }} style={styles.CameraHook} type={RNCamera.Constants.Type.front} />
                        </View>
                    </View>
                </View>
                <View style={styles.ProcessingSectionView}>
                    <View style={styles.CompareButtonView}>
                        <TouchableOpacity onPress={this.onCompareButtonPress} style={styles.CompareButton}>
                            <Text style={styles.CompareButtonText} >Compare With Database</Text>
                            <Image source={require('../assets/icons/sync_white_24dp.svg')} style={styles.CompareButtonImage} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    public onCompareButtonPress = async () => {
        await DisplayCameraStatus.takePicturesFromBothCameras();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.props.setSelectedRecognitionComp(2);
    }
}

const styles = StyleSheet.create({
    PageTitleView: {
        paddingBottom: 50,
        paddingRight: 40,
        width: "100%"
    },
    PageTitleText: {
        fontSize: 30,
        color: "black",
        paddingBottom: 10
    },
    PageTitleUnderlineView: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    CameraStatusView: {
        //marginLeft: 0,
        marginRight: -80,
        padding: 40,
        backgroundColor: "#011e36",
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20
    },
    DevidedCameraView: {
        width: "50%",
        borderColor: "#02e6c8",
        borderWidth: 3,
        borderRadius: 5,
        margin: 5
    },
    CameraTitleText: {
        fontSize: 20,
        color: "white",
        paddingBottom: 10,
        marginLeft: 5
    },
    CameraHookView: {
        backgroundColor: "white",
        width: "90%",
        height: 450,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center'
    },
    CameraHook: {
        width: "100%",
        height: "100%"
    },
    CameraFuncButtonsView: {
        width: "90%",
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    CameraFuncCaptureButton: {
        width: "40%",
        height: 30,
        backgroundColor: "#5776f2",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    CameraFuncClearButton: {
        width: "40%",
        height: 30,
        backgroundColor: "red",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    CameraFuncButtonText: {
        color: "white",
        fontSize: 18
    },
    ProcessingSectionView: {
        marginTop: 50,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center"
    },
    DevidedProcessingSectionView: {
        width: "50%"
    },
    DevidedProcessingSectionTitleView: {
        paddingBottom: 50,
        paddingRight: 40,
        width: "100%"
    },
    DevidedProcessingSectionTitleText: {
        fontSize: 25,
        color: "black",
        paddingBottom: 10
    },
    DevidedProcessingSectionTitleUnderlineView: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    CompareButtonView: {
        width: "50%",
        display: 'flex',
        flexDirection: 'row'
    },
    CompareButton: {
        width: "100%",
        height: 40,
        backgroundColor: "#02e6c8",
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    CompareButtonText: {
        color: "white",
        fontSize: 18
    },
    CompareButtonImage: {
        resizeMode: "contain",
        marginLeft: 5,
        width: 27,
        height: 27
    }
});