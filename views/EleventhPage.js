import React from 'react';
import type { Node } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';


const EleventhPage: () => Node = () => {

    const pageData = {
        "name": "Jassica Anderson",
        "department": "IT Section",
        "time": "10:10",
        "date": "01/01/2022",
        "front_image": require("../assets/images/Women2_FrontFace.jpg")
    }

    return (
        <View style={styles.style1}>
            <View style={styles.style2}></View>
            <View style={styles.style3}></View>
            <View style={styles.style4}>
                <View style={styles.style5}>
                    <View style={styles.style6}>
                        <View style={styles.style7}>
                            <Image source={require('../assets/images/ProjectMOFI_WhiteBackground.jpeg')} style={styles.style8} />
                        </View>
                    </View>

                    {/*<View style={{ backgroundColor: "brown", width: "100%", height: "60%", alignItems: 'center', justifyContent: 'center' }}></View>*/}
                    <View style={styles.style9}>
                        <View style={styles.style10}>
                            <View style={styles.style11}>
                                <View style={styles.style12}>
                                    <Image source={pageData.front_image} style={styles.style13} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.style14}>
                        <Text style={styles.style15}>Access Granted</Text>
                        <Image source={require('../assets/icons/check-circle-solid.svg')} style={styles.style16} />
                    </View>
                </View>

                <View style={styles.style17}>
                    <View style={styles.style18}>
                        <View style={styles.style19}>
                            <Text style={styles.style20}>Name : </Text>
                            <Text style={styles.style21}>{pageData.name}</Text>
                        </View>
                        <View style={styles.style19}>
                            <Text style={styles.style20}>Department : </Text>
                            <Text style={styles.style21}>{pageData.department}</Text>
                        </View>
                        <View style={styles.style19}>
                            <Text style={styles.style20}>Attendance marked at : </Text>
                        </View>
                        <View style={styles.style22}>
                            <View style={styles.style23}>
                                <Text style={{  }}>Time</Text>
                            </View>
                            <View style={styles.style23}>
                                <Text style={styles.style24}>Date</Text>
                            </View>
                        </View>
                        <View style={styles.style25}>
                            <View style={styles.style23}>
                                <Text style={styles.style26}>{pageData.time}</Text>
                            </View>
                            <View style={styles.style23}>
                                <Text style={styles.style26}>{pageData.date}</Text>
                            </View>
                        </View>
                        <View style={styles.style27}>
                            <Text style={styles.style28}>THANK YOU!</Text>
                        </View>
                    </View>
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
        flexDirection: "row",
        height: "100%",
        padding: 10
    },

    style5: {
        height: "100%",
        width: "50%"
    },

    style6: {
        width: "100%",
        height: "20%",
        display: 'flex',
        flexDirection: 'row'
    },

    style7: {
        width: "50%",
        height: "70%"
    },

    style8: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },

    style9: {
        width: "100%",
        height: "60%",
        alignItems: 'center',
        justifyContent: 'center'
    },

    style10: {
        zIndex: 2,
        backgroundColor: "#011e36",
        display: 'flex',
        flexDirection: 'row',
        width: "70%",
        height: "80%",
        borderRadius: 20
    },

    style11: {
        height: "100%",
        width: "100%",
        padding: 20
    },

    style12: {
        height: "100%",
        width: "100%",
        borderColor: "#02e6c8",
        borderWidth: 3,
        borderRadius: 5
    },

    style13: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },

    style14: {
        height: "20%",
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center'
    },

    style15: {
        color: "#34d27b",
        fontSize: 50,
        fontWeight: '700'
    },

    style16: {
        resizeMode: "contain",
        marginLeft: 5,
        marginTop: 10,
        width: 50,
        height: 50
    },

    style17: {
        height: "100%",
        width: "50%",
        padding: 50,
        paddingTop: 100,
        paddingBottom: 100
    },

    style18: {
        backgroundColor: "#011e36",
        width: "100%",
        height: "100%",
        borderRadius: 50,
        padding: 30
    },

    style19: {
        width: "100%",
        height: "15%",
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },

    style20: {
        color: "#02e6c8",
        fontSize: 40,
        fontWeight: '500'
    },

    style21: {
        color: "white",
        width: "100%",
        fontSize: 40,
        fontWeight: '400',
        marginLeft: 10
    },

    style22: {
        borderColor: "white",
        borderWidth: 1,
        width: "100%",
        height: "15%",
        display: 'flex',
        flexDirection: 'row'
    },

    style23: {
        borderColor: "white",
        borderWidth: 1,
        width: "50%",
        height: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    style24: {
        color: "white",
        fontSize: 40,
        fontWeight: '500'
    },

    style25: {
        borderColor: "white",
        borderWidth: 1,
        borderTopWidth: 0,
        width: "100%",
        height: "15%",
        display: 'flex',
        flexDirection: 'row'
    },

    style26: {
        color: "white",
        fontSize: 35,
        fontWeight: '400'
    },

    style27: {
        width: "100%",
        height: "25%",
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    style28: {
        color: "#b2f888",
        fontSize: 40,
        fontWeight: '700'
    },

});

export default EleventhPage;