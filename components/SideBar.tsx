import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import LoggedInUser from '../models/LoggedInUserModel';

type MyProps = {
    loggedInUser: string
    setSelectedComp(compNum: number): void,
    setSelectedComp2(compNum: number, sideBarStatus: boolean, recognitionMode: boolean): void,
    onLogOutPress(): void
};
type MyState = {

};

class SideBar extends React.Component<MyProps, MyState> {

    onLogOutPress = () => {
        LoggedInUser.ResetUserCred();
        this.props.onLogOutPress();
    }

    render() {
        return (
            <View>
                <View style={styles.userDetailsView}>
                    <Image source={require('../assets/icons/account_circle_192e40.svg')} style={styles.userLoginImage} />
                    <Text style={styles.userNameText}>{this.props.loggedInUser}</Text>
                    <TouchableOpacity onPress={ this.onLogOutPress } >
                        <Text style={styles.logOutButtonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sideBarButtonSectionView}>
                    <TouchableOpacity onPress={() => { this.props.setSelectedComp2(2, false, true) }}>
                        <View style={styles.sideBarButtonView}>
                            <Image source={require('../assets/icons/face_white_24dp.svg')} style={styles.sideBarButtonImage} />
                            <Text style={styles.sideBarButtonText}>
                                Face Recognition
                            </Text>
                        </View>
                        <View style={styles.buttonBottomBlueBar}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.setSelectedComp(3) }}>
                        <View style={styles.sideBarButtonView}>
                            <Image source={require('../assets/icons/how_to_reg_white_24dp.svg')} style={styles.sideBarButtonImage} />
                            <Text style={styles.sideBarButtonText}>
                                Register Employee
                            </Text>
                        </View>
                        <View style={styles.buttonBottomBlueBar}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.setSelectedComp(4) }}>
                        <View style={styles.sideBarButtonView}>
                            <Image source={require('../assets/icons/visibility_white_24dp.svg')} style={styles.sideBarButtonImage} />
                            <Text style={styles.sideBarButtonText}>
                                View Employee
                            </Text>
                        </View>
                        <View style={styles.buttonBottomBlueBar}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.setSelectedComp(5) }}>
                        <View style={styles.sideBarButtonView}>
                            <Image source={require('../assets/icons/stacked_bar_chart_white_24dp.svg')} style={styles.sideBarButtonImage} />
                            <Text style={styles.sideBarButtonText}>
                                Attendance Report
                            </Text>
                        </View>
                        <View style={styles.buttonBottomBlueBar}></View>
                    </TouchableOpacity>
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


export default SideBar;