import React from 'react';
import type { Node } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';


const NinthPage: () => Node = () => {

    var pageData = {
        "front_image": require("../assets/images/Women2_FrontFace.jpg"),
        "side_image": require("../assets/images/Women2_SideFace.jpg")
    }

    return (
        <View style={styles.style1}>
            <View style={styles.style2}></View>
            <View style={styles.style3}></View>
            <View style={styles.style4}>
                <View style={styles.style5}>
                    <View style={styles.style6}>
                        <Image source={require('../assets/images/ProjectMOFI_WhiteBackground.jpeg')} style={styles.style7} />
                    </View>
                </View>
                <View style={styles.style8}>
                    <View style={styles.style9}>
                        <View style={styles.style10}>
                            <View style={styles.style11}>
                                <Image source={pageData.front_image} style={styles.style7} />
                            </View>
                        </View>
                        <View style={styles.style10}>
                            <View style={styles.style11}>
                                <Image source={pageData.side_image} style={styles.style7} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.style12}>
                    <Text style={styles.style13}>Access Granted</Text>
                    <Image source={require('../assets/icons/check-circle-solid.svg')} style={styles.style14} />
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    style1: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        height: "100%"
    },
    style2: {
        width: "70%",
        height: "110%",
        position: 'absolute',
        top: "20%",
        right: "70%",
        borderRadius: 500,
        borderColor: "brown",
        borderWidth: 3
    },
    style3: {
        width: "70%",
        height: "110%",
        position: 'absolute',
        bottom: "20%",
        left: "60%",
        borderRadius: 500,
        borderColor: "#2f5c83",
        borderWidth: 3
    },
    style4: {
        flexDirection: "column",
        height: "100%",
        padding: 10
    },
    style5: {
        width: "100%",
        height: "20%",
        display: 'flex',
        flexDirection: 'row'
    },
    style6: {
        width: "25%",
        height: "70%"
    },
    style7: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    style8: {
        width: "100%",
        height: "60%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    style9: {
        zIndex: 2,
        backgroundColor: "#011e36",
        display: 'flex',
        flexDirection: 'row',
        width: "70%",
        height: "80%",
        borderRadius: 20
    },
    style10: {
        height: "100%",
        width: "50%",
        padding: 20
    },
    style11: {
        height: "100%",
        width: "100%",
        borderColor: "#02e6c8",
        borderWidth: 3,
        borderRadius: 5
    },
    style12: {
        height: "20%",
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    style13: {
        olor: "#34d27b",
        fontSize: 50,
        fontWeight: '700'
    },
    style14: {
        resizeMode: "contain",
        marginLeft: 5,
        marginTop: 10,
        width: 50,
        height: 50
    }
});

export default NinthPage;