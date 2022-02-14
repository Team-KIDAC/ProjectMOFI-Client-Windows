import React from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';


const SeventhPage: () => Node = () => {
    return (
        <View style={styles.style1}>
            <View style={styles.style2}>
                <Image source={require('../assets/images/ProjectMOFI.svg')} style={styles.style3} />
            </View>
            <View style={styles.style4}>
                <View style={styles.style14}>
                    <Text style={styles.style11}>
                        Log In
                    </Text>
                    <View style={styles.style9}></View>
                </View>
                <View style={styles.style6}>
                    <Text style={styles.style8}>Username*</Text>
                    <TextInput style={styles.style7} />
                    <Text style={styles.style8}>Password*</Text>
                    <TextInput style={styles.style7} />

                    <TouchableOpacity style={styles.style12}>
                        <Text style={styles.style13}>Login</Text>
                    </TouchableOpacity>
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
            width: "60%",
            paddingTop: 10,
            paddingRight: 10
        },

        style3: {
            resizeMode: "contain",
            width: "100%",
            height: "100%"
        },

        style4: {
            backgroundColor: "#011e36",
            height: "100%",
            width: "40%",
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center'
        },

        style5: {
            backgroundColor: "#02e6c8",
            height: 2,
            width: "100%",
            marginLeft: -10
        },

        style6: {
            width: "100%"
        },

        style7: {
            borderRadius: 7,
            marginBottom: 20,
            backgroundColor: "white",
            width: "70%"
        },

        style8: {
            fontSize: 20,
            color: "white",
            paddingBottom: 5
        },

        style9: {
            backgroundColor: "#02e6c8",
            height: 2,
            width: "100%",
            marginLeft: -10
        },

        style11: {
            fontSize: 25,
            color: "white",
            paddingBottom: 10
        },

        style12: {
            backgroundColor: "#02e6c8",
            height: 30,
            width: "50%",
            borderRadius: 7,
            alignItems: 'center'
        },

        style13: {
            fontSize: 20,
            color: "white"
        },

    });

export default SeventhPage;