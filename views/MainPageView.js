import React, { Component } from 'react';
import type { Node } from 'react';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
    Touchable,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
} from 'react-native';

import SideBar from '../components/SideBar';
import DisplayCameraStatusView from './DisplayCameraStatusView';
import AddNewEmployeeView from './AddNewEmployeeView';
import ViewEmployeeDataView from './ViewEmployeeDataView';
import ViewAttendanceReportView from './ViewAttendanceReportView';
//import NewSideBar from '../components/NewSideBar';

var pageData = {
    "name_of_user": "Dewmin Madiwila",
    "side_image": require('../assets/images/masked_face_side_view.jpg'),
    "image0": require('../assets/images/masked_face_side_view.jpg'),
    "image1": require('../assets/images/masked_face_side_view.jpg'),
    "image2": require('../assets/images/masked_face_side_view.jpg'),
    "image3": require('../assets/images/masked_face_side_view.jpg'),
    "image4": require('../assets/images/masked_face_side_view.jpg'),
    "image5": require('../assets/images/masked_face_side_view.jpg')
}

class MainPageView extends Component {

    state = { selectedComp: 0 };

    render() {
        return (
            <View style={styles.mainWindowView}>
                <View style={styles.sideBarWindow}>
                    {/*<SideBar name={pageData.name_of_user} />*/}
                    <SideBar setSelectedComp={(compNum) => { this.setState({ selectedComp: compNum }) }} />

                    <View style={styles.bottomLogoView}>
                        <Image source={require('../assets/images/ProjectMOFI.svg')} style={styles.bottomLogoImage} />
                    </View>

                </View>
                <View style={styles.contentSectionView}>
                    {(this.state.selectedComp == 0) ? <DisplayCameraStatusView /> : (this.state.selectedComp == 1) ? <AddNewEmployeeView /> : (this.state.selectedComp == 2) ? <ViewEmployeeDataView /> : (this.state.selectedComp == 3) ? <ViewAttendanceReportView /> : null}
                </View>
            </View>
        );
    }

    setSelectedComp(chosenNum) {
        this.setState({ selectedComp: chosenNum });
    }
}


//var myState = 0;


//function renderContent() {
//    if (myState == 0) {
//        return (<DisplayCameraStatusView />);
//    }
//    else if (myState == 1) {
//        return (<AddNewEmployeeView />);
//    }
//}

//function changeState(num) {
//    myState = num;
//    MainPageView();
//}

const styles = StyleSheet.create({
    mainWindowView: {
        flexDirection: "row",
        backgroundColor: "#011e36",
        height: "100%",
        padding: 10
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
    }
});

export default MainPageView;