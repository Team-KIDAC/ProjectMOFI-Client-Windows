import React from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const SixthPage: () => Node = () => {

    var pageData = {
        "name_of_user": "Dewmin Madiwila"
    }

    return (
        <View style={styles.style1}>
            <View style={styles.style2}>
                <SideBar name={pageData.name_of_user} />
            </View>
            <View style={styles.style3}>
                <View style={styles.style4}>
                    <Text style={styles.style5}>WELCOME !</Text>
                    <Text style={styles.style6}>To the attendance system using masked face recognition.</Text>
                </View>
                <View style={styles.style7}>
                    <Image source={require('../assets/images/ProjectMOFI_Background_Image.jpg')} style={styles.style8} />
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    style1: {
        flexDirection: "row",
        backgroundColor: "#011e36",
        height: "100%",
        padding: 10
    },

    style2: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "20%",
        borderColor: "#02e6c8",
        borderRightWidth: 5,
        paddingTop: 10,
        paddingRight: 10
    },

    style3: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "80%",
        display: "flex",
        flexDirection: 'column',
        padding: 50,
        paddingLeft: 100
    },

    style4: {
        width: 350,
        height: "20%"
    },

    style5: {
        color: "white",
        fontSize: 50,
        fontWeight: '600'
    },

    style6: {
        color: "white",
        fontSize: 20
    },

    style7: {
        height: "80%",
        width: "100%"
    },

    style8: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
});

export default SixthPage;