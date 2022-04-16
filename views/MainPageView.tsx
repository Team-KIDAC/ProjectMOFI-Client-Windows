import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import SideBar from '../components/SideBar';
import LoginPageView from './LoginPageView';
import LoggedWelcomePageView from './LoggedWelcomePageView';
import DisplayCameraStatusView from './RecognitionMode/DisplayCameraStatusView'
import AddNewEmployeeView from './AddNewEmployeeView';
import ViewEmployeeDataView from './ViewEmployeeDataView';
import ViewAttendanceReportView from './ViewAttendanceReportView';
import RecognitionWelcomePageView from './RecognitionMode/RecognitionWelcomePageView';
import AccessGrantedView from './RecognitionMode/AccessGrantedView';
import AccessDeniedView from './RecognitionMode/AccessDeniedView';
import AccessProcessingView from './RecognitionMode/AccessProcessingView';

type MyProps = {
    // using `interface` is also ok
    //message: string;
};
type MyState = {
    selectedComp: number,
    IsSideBarActive: boolean
    IsRecognitionModeActive: boolean
};

class MainPageView extends React.Component<MyProps, MyState> {
    state: MyState = {
        selectedComp: 0,
        IsSideBarActive: false,
        IsRecognitionModeActive: false
    }

    render() {
        return (
            <View style={styles.mainWindowView}>
                {
                    (this.state.IsSideBarActive) ?
                        (
                            <View style={styles.sideBarWindow}>
                                <SideBar setSelectedComp={(compNum: number) => { this.setState({ selectedComp: compNum }) }} setSelectedComp2={(compNum: number, sideBarStatus: boolean, recognitionMode: boolean) => { this.setState({ selectedComp: compNum, IsSideBarActive: sideBarStatus, IsRecognitionModeActive: true }) }} onLogOutPress={() => { this.setState({ selectedComp: 0, IsSideBarActive: false }) }} />
                                <View style={styles.bottomLogoView}>
                                    <Image source={require('../assets/images/ProjectMOFI.svg')} style={styles.bottomLogoImage} />
                                </View>
                            </View>
                        )
                        : null
                }
                <View style={(this.state.IsSideBarActive) ? styles.contentSectionView : (this.state.IsRecognitionModeActive) ? styles.contentSectionViewWithRecongizeMode : styles.contentSectionViewWithoutSideBar}>
                    {
                        (this.state.selectedComp == 0) ? <LoginPageView setSelectedComp={(compNum: number, sideBarStatus: boolean) => { this.setState({ selectedComp: compNum, IsSideBarActive: sideBarStatus }) }} /> 
                            : (this.state.selectedComp == 1) ? <LoggedWelcomePageView />
                                : (this.state.selectedComp == 2) ? <DisplayCameraStatusView />
                                    : (this.state.selectedComp == 3) ? <AddNewEmployeeView />
                                        : (this.state.selectedComp == 4) ? <ViewEmployeeDataView />
                                            : (this.state.selectedComp == 5) ? <ViewAttendanceReportView />
                                                : (this.state.selectedComp == 6) ? <RecognitionWelcomePageView />
                                                    : (this.state.selectedComp == 7) ? <AccessGrantedView />
                                                        : (this.state.selectedComp == 8) ? <AccessDeniedView />
                                                            : (this.state.selectedComp == 9) ? <AccessProcessingView />
                                                                : null
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainWindowView: {
        flexDirection: "row",
        backgroundColor: "#011e36",
        height: "100%",
        //padding: 10
    },
    sideBarWindow: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "20%",
        borderColor: "#02e6c8",
        borderRightWidth: 5,
        paddingTop: 10,
        paddingRight: 10
    },
    contentSectionView: {
        width: "80%",
        padding: 50
    },
    contentSectionViewWithoutSideBar: {
        width: "100%",
        padding: 50
    },
    contentSectionViewWithRecongizeMode: {
        width: "100%",
    },
    bottomLogoView: {
        height: "33.33%"
    },
    bottomLogoImage: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    }
});

export default MainPageView;