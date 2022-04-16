import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import Attendee from '../../models/AttendeeModel';
import DisplayCameraStatus from '../../ViewModels/DisplayCameraStatusViewModel';


type MyProps = {
    setSelectedRecognitionComp(compNum: number): void
};
type MyState = {

};

class AccessGrantedView extends React.Component<MyProps, MyState> {
    startAnotherCircle = async () => {
        await new Promise(resolve => setTimeout(resolve, 4000));
        await this.props.setSelectedRecognitionComp(1);
    }
    render() {
        this.startAnotherCircle();
        return (
            <View style={{ display: 'flex', flexDirection: 'column', width: "100%", height: "100%" }}>
                <View style={{ width: "70%", height: "110%", position: 'absolute', top: "20%", right: "70%", borderRadius: 500, borderColor: "brown", borderWidth: 3 }}></View>
                <View style={{ width: "70%", height: "110%", position: 'absolute', bottom: "20%", left: "60%", borderRadius: 500, borderColor: "#2f5c83", borderWidth: 3 }}></View>
                <View style={{ flexDirection: "row", height: "100%", padding: 10 }}>
                    <View style={{ height: "100%", width: "50%" }}>
                        <View style={{ width: "100%", height: "20%", display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: "50%", height: "70%" }}>
                                <Image source={require('../assets/images/ProjectMOFI_WhiteBackground.jpeg')} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                            </View>
                        </View>

                        {/*<View style={{ backgroundColor: "brown", width: "100%", height: "60%", alignItems: 'center', justifyContent: 'center' }}></View>*/}
                        <View style={{ width: "100%", height: "60%", alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ zIndex: 2, backgroundColor: "#011e36", display: 'flex', flexDirection: 'row', width: "70%", height: "80%", borderRadius: 20 }}>
                                <View style={{ height: "100%", width: "100%", padding: 20 }}>
                                    <View style={{ height: "100%", width: "100%", borderColor: "#02e6c8", borderWidth: 3, borderRadius: 5 }}>
                                        <Image source={{ uri: DisplayCameraStatus.frontCameraData?.uri }} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ height: "20%", width: "100%", display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: "#34d27b", fontSize: 50, fontWeight: '700' }}>Access Granted</Text>
                            <Image source={require('../assets/icons/check-circle-solid.svg')} style={{ resizeMode: "contain", marginLeft: 5, marginTop: 10, width: 50, height: 50 }} />
                        </View>
                    </View>

                    <View style={{ height: "100%", width: "50%", padding: 50, paddingTop: 100, paddingBottom: 100 }}>
                        <View style={{ backgroundColor: "#011e36", width: "100%", height: "100%", borderRadius: 50, padding: 30 }}>
                            <View style={{ width: "100%", height: "15%", paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                                <Text style={{ color: "#02e6c8", fontSize: 40, fontWeight: '500' }}>Name : </Text>
                                <Text style={{ color: "white", width: "100%", fontSize: 40, fontWeight: '400', marginLeft: 10 }}>{Attendee.getName()}</Text>
                            </View>
                            <View style={{ width: "100%", height: "15%", paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                                <Text style={{ color: "#02e6c8", fontSize: 40, fontWeight: '500' }}>Department : </Text>
                                <Text style={{ color: "white", width: "100%", fontSize: 40, fontWeight: '400', marginLeft: 10 }}>{Attendee.getDepartment()}</Text>
                            </View>
                            <View style={{ width: "100%", height: "15%", paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                                <Text style={{ color: "#02e6c8", fontSize: 40, fontWeight: '500' }}>Attendance marked at : </Text>
                            </View>
                            <View style={{ borderColor: "white", borderWidth: 1, width: "100%", height: "15%", display: 'flex', flexDirection: 'row' }}>
                                <View style={{ borderColor: "white", borderWidth: 1, width: "50%", height: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: "white", fontSize: 40, fontWeight: '500' }}>Time</Text>
                                </View>
                                <View style={{ borderColor: "white", borderWidth: 1, width: "50%", height: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: "white", fontSize: 40, fontWeight: '500' }}>Date</Text>
                                </View>
                            </View>
                            <View style={{ borderColor: "white", borderWidth: 1, borderTopWidth: 0, width: "100%", height: "15%", display: 'flex', flexDirection: 'row' }}>
                                <View style={{ borderColor: "white", borderWidth: 1, width: "50%", height: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: "white", fontSize: 35, fontWeight: '400' }}>{Attendee.getAttendedTime()}</Text>
                                </View>
                                <View style={{ borderColor: "white", borderWidth: 1, width: "50%", height: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: "white", fontSize: 35, fontWeight: '400' }}>{Attendee.getAttendedDate()}</Text>
                                </View>
                            </View>
                            <View style={{ width: "100%", height: "25%", paddingTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: "#b2f888", fontSize: 40, fontWeight: '700' }}>THANK YOU!</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default AccessGrantedView;