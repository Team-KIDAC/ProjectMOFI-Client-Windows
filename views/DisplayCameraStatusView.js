import React, { Component } from 'react';

import AccessStatus from '../components/AccessStatus';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    StyleSheet,
} from 'react-native';

import { RNCamera } from 'react-native-camera';


class DisplayCameraStatusView extends Component {
    state = {
        accessStatus: 0,
        photoId: 0,
        takenPhotos: []
    };

    render() {
        return (
            <View>
                <View style={styles.PageTitleView}>
                    <Text style={styles.PageTitleText}>
                        Display Camera Status
                    </Text>
                    <View style={styles.PageTitleUnderlineView}></View>
                </View>
                <View style={styles.CameraStatusView}>
                    <View style={styles.DevidedCameraView}>
                        <Text style={styles.CameraTitleText}>Side View</Text>
                        <View style={styles.CameraHookView}>
                            <RNCamera ref={ref => { this.camera = ref; }} style={styles.CameraHook} type={RNCamera.Constants.Type.front} />
                        </View>
                        <View style={styles.CameraFuncButtonsView}>
                            <TouchableOpacity onPress={this.takePicture} style={styles.CameraFuncCaptureButton}>
                                <Text style={styles.CameraFuncButtonText} >Capture</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL('app-settings:') }} style={styles.CameraFuncClearButton}>
                                <Text style={styles.CameraFuncButtonText} >Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.DevidedCameraView}>
                        <Text style={styles.CameraTitleText}>Front View</Text>
                        <View style={styles.CameraHookView}>
                            <RNCamera style={styles.CameraHook} type={RNCamera.Constants.Type.front} />
                        </View>
                        <View style={styles.CameraFuncButtonsView}>
                            <TouchableOpacity style={styles.CameraFuncCaptureButton}>
                                <Text style={styles.CameraFuncButtonText} >Capture</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CameraFuncClearButton}>
                                <Text style={styles.CameraFuncButtonText} >Clear</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={styles.ProcessingSectionView}>
                    <View style={styles.DevidedProcessingSectionView}>
                        <View style={styles.DevidedProcessingSectionTitleView}>
                            <Text style={styles.DevidedProcessingSectionTitleText}>
                                Capture Comparing
                            </Text>
                            <View style={styles.DevidedProcessingSectionTitleUnderlineView}></View>
                        </View>
                        <View style={styles.CompareButtonView}>
                            <TouchableOpacity onPress={() => { this.setState({ accessStatus: 1 }) }} style={styles.CompareButton}>
                                <Text style={styles.CompareButtonText} >Compare With Database</Text>
                                <Image source={require('../assets/icons/sync_white_24dp.svg')} style={styles.CompareButtonImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.DevidedProcessingSectionView}>
                        <View style={styles.DevidedProcessingSectionTitleView}>
                            <Text style={styles.DevidedProcessingSectionTitleText}>
                                Output
                            </Text>
                            <View style={styles.DevidedProcessingSectionTitleUnderlineView}></View>
                        </View>
                        {(this.state.accessStatus == 1) ? <AccessStatus status={1} /> : (this.state.accessStatus == 2) ? <AccessStatus status={2} /> : null}
                    </View>
                </View>
            </View>
        );
    }

    takePicture = async () => {
        try {
            if (this.camera) {
                const options = { quality: 1, base64: true };
                const data = await this.camera.takePictureAsync(options);
                console.log(data.uri);
            }
        } catch (ex) {

        }
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
        color: "white",
        paddingBottom: 10
    },
    PageTitleUnderlineView: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    CameraStatusView: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row'
    },
    DevidedCameraView: {
        width: "50%"
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
        height: 250,
        borderRadius: 5
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
        flexDirection: 'row'
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
        color: "white",
        paddingBottom: 10
    },
    DevidedProcessingSectionTitleUnderlineView: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    CompareButtonView: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row'
    },
    CompareButton: {
        width: "90%",
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

export default DisplayCameraStatusView;