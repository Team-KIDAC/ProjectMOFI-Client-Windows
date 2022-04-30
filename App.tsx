import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import SideBar from './components/SideBar';
import LoginPageView from './views/LoginPageView';
import LoggedWelcomePageView from './views/LoggedWelcomePageView';
import AddNewEmployeeView from './views/AddNewEmployeeView';
import ViewEmployeeDataView from './views/ViewEmployeeDataView';
import ViewAttendanceReportView from './views/ViewAttendanceReportView';
import FaceRecognitionModeView from './views/FaceRecognitionModeView';


type MyProps = {

};
type MyState = {
    selectedComp: number,
    IsSideBarActive: boolean
    IsRecognitionModeActive: boolean
};

export default class App extends React.Component<MyProps, MyState> {
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
                                : (this.state.selectedComp == 2) ? <FaceRecognitionModeView setFaceRecognitionMode={(isRecognitionModeActive: boolean) => { this.setState({ IsRecognitionModeActive: isRecognitionModeActive, selectedComp: 1, IsSideBarActive: true }) }} />
                                    : (this.state.selectedComp == 3) ? <AddNewEmployeeView />
                                        : (this.state.selectedComp == 4) ? <ViewEmployeeDataView />
                                            : (this.state.selectedComp == 5) ? <ViewAttendanceReportView />
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
    userLoginImage: {
        resizeMode: "contain",
        width: "50%",
        height: "50%"
    },
    userNameText: {
        color: "white",
        fontSize: 20
    },
    logOutButtonText: {
        color: "red"
    },
    userDetailsView: {
        height: "33.33%",
        alignItems: 'center'
    },
    sideBarButtonSectionView: {
        height: "33.33%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    sideBarButtonView: {
        display: 'flex',
        flexDirection: 'row'
    },
    sideBarButtonImage: {
        resizeMode: "contain",
        width: 27,
        height: 27
    },
    sideBarButtonText: {
        fontSize: 20,
        color: "white",
        paddingBottom: 10,
        marginLeft: 5
    },
    buttonBottomBlueBar: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    bottomLogoView: {
        height: "33.33%"
    },
    bottomLogoImage: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
});