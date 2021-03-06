import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import DisplayCameraStatus from '../../ViewModels/DisplayCameraStatusViewModel';


type MyProps = {
    setSelectedRecognitionComp(compNum: number): void
};
type MyState = {
    isAccessGranted: boolean
};

export default class AccessProcessingView extends React.Component<MyProps, MyState> {
    state: MyState = {
        isAccessGranted: true
    };

    public static isGranted: number | null = 0;
    myDate: Date = new Date();
    dateNow: string = "";
    timeNow: string = "";

    //A method to send the taken images to the api in order to identify.
    sentImagesToApi = async () => {
        try {
            console.log(AccessProcessingView.isGranted);
            await DisplayCameraStatus.sendImagesToApi();

            if (AccessProcessingView.isGranted == 1) {
                await this.props.setSelectedRecognitionComp(3);
            }
            else if (AccessProcessingView.isGranted == 2) {
                this.setState({ isAccessGranted: false });
                await new Promise(resolve => setTimeout(resolve, 3000));
                await this.props.setSelectedRecognitionComp(0);
            }
        }
        catch (ex) {
            this.setState({ isAccessGranted: false });
            await new Promise(resolve => setTimeout(resolve, 3000));
            await this.props.setSelectedRecognitionComp(0);
        }

    }

    render() {
        this.sentImagesToApi();
        return (
            //A simple view to show the processing status.
            <View style={{ display: 'flex', flexDirection: 'column', width: "100%", height: "100%" }}>
                <View style={{ width: "70%", height: "110%", position: 'absolute', top: "20%", right: "70%", borderRadius: 500, borderColor: "brown", borderWidth: 3 }}></View>
                <View style={{ width: "70%", height: "110%", position: 'absolute', bottom: "20%", left: "60%", borderRadius: 500, borderColor: "#2f5c83", borderWidth: 3 }}></View>
                <View style={{ flexDirection: "column", height: "100%", padding: 10 }}>
                    <View style={{ width: "100%", height: "20%", display: 'flex', flexDirection: 'row' }}>
                        <View style={{ width: "25%", height: "70%" }}>
                            <Image source={require('../assets/images/ProjectMOFI_WhiteBackground.jpeg')} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>
                    <View style={{ width: "100%", height: "60%", alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ zIndex: 2, backgroundColor: "#011e36", display: 'flex', flexDirection: 'row', width: "70%", height: "80%", borderRadius: 20 }}>
                            <View style={{ height: "100%", width: "50%", padding: 20 }}>
                                <View style={{ height: "100%", width: "100%", borderColor: "#02e6c8", borderWidth: 3, borderRadius: 5 }}>
                                    <Image source={{ uri: DisplayCameraStatus.frontCameraData?.uri }} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                                </View>
                            </View>
                            <View style={{ height: "100%", width: "50%", padding: 20 }}>
                                <View style={{ height: "100%", width: "100%", borderColor: "#02e6c8", borderWidth: 3, borderRadius: 5 }}>
                                    <Image source={{ uri: DisplayCameraStatus.sideCameraData?.uri }} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                                </View>
                            </View>
                        </View>
                    </View>
                    {
                        (this.state.isAccessGranted) ?
                            (
                                <View style={{ height: "20%", width: "100%", display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={{ color: "#2f5c83", fontSize: 50, fontWeight: '700' }}>PROCESSING</Text>
                                    <Image source={require('../assets/icons/sync_problem_24dp.svg')} style={{ resizeMode: "contain", marginLeft: 5, marginTop: 10, width: 50, height: 50 }} />
                                </View>
                            )
                            : (
                                <View style={{ height: "20%", width: "100%", display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={{ color: "#a44322", fontSize: 50, fontWeight: '700' }}>Access Denied</Text>
                                    <Image source={require('../assets/icons/times-circle-solid.svg')} style={{ resizeMode: "contain", marginLeft: 5, marginTop: 13, width: 45, height: 45 }} />
                                </View>
                            )
                    }
                </View>
            </View>
        );
    }
}