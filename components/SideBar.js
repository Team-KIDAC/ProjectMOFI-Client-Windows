import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import { Def } from '../node_modules/ast-types/lib/types';

function SideBar(props) {

    return (
        <View>
            <View style={styles.userDetailsView}>
                <Image source={require('../assets/icons/account_circle_192e40.svg')} style={styles.userLoginImage} />
                <Text style={styles.userNameText}>{props.name}</Text>
                <TouchableOpacity >
                    <Text style={styles.logOutButtonText}>Log Out</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.sideBarButtonSectionView}>
                <TouchableOpacity>
                    <View style={styles.sideBarButtonView}>
                        <Image source={require('../assets/icons/face_white_24dp.svg')} style={styles.sideBarButtonImage} />
                        <Text style={styles.sideBarButtonText}>
                            Face Recognition
                        </Text>
                    </View>
                    <View style={styles.buttonBottomBlueBar}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.sideBarButtonView}>
                        <Image source={require('../assets/icons/how_to_reg_white_24dp.svg')} style={styles.sideBarButtonImage} />
                        <Text style={styles.sideBarButtonText}>
                            Register Employee
                        </Text>
                    </View>
                    <View style={styles.buttonBottomBlueBar}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.sideBarButtonView}>
                        <Image source={require('../assets/icons/visibility_white_24dp.svg')} style={styles.sideBarButtonImage} />
                        <Text style={styles.sideBarButtonText}>
                            View Employee
                        </Text>
                    </View>
                    <View style={styles.buttonBottomBlueBar}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.sideBarButtonView}>
                        <Image source={require('../assets/icons/stacked_bar_chart_white_24dp.svg')} style={styles.sideBarButtonImage} />
                        <Text style={styles.sideBarButtonText}>
                            Attendance Report
                        </Text>
                    </View>
                    <View style={styles.buttonBottomBlueBar}></View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomLogoView}>
                <Image source={require('../assets/images/ProjectMOFI.svg')} style={styles.bottomLogoImage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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