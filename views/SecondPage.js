import React from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


const SecondPage: () => Node = () => {

    var pageData = {
        "name_of_user": "Dewmin Madiwila",
        "front_image": require('../assets/images/masked_face_side_view.jpg'),
        "side_image": require('../assets/images/masked_face_side_view.jpg')
    }

    return (
        <View style={styles.style1}>
            <View style={styles.style2}>
                <SideBar name={pageData.name_of_user} />
            </View>
            <View style={styles.style3}>
                <View style={styles.style4}>
                    <Text style={styles.style5}>
                        Display Camera Status
                    </Text>
                    <View style={styles.style6}></View>
                </View>
                <View style={styles.style7}>
                    <View style={styles.style8}>
                        <Text style={styles.style9}>Side View</Text>
                        <View style={styles.style10}>
                            <Image source={pageData.side_image} style={styles.style11} />
                        </View>
                        <View style={styles.style12}>
                            <TouchableOpacity style={styles.style13}>
                                <Text style={styles.style14} >Capture</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.style15}>
                                <Text style={styles.style14} >Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.style8}>
                        <Text style={styles.style9}>Front View</Text>
                        <View style={styles.style10}>
                            <Image source={pageData.front_image} style={styles.style11} />
                        </View>
                        <View style={styles.style12}>
                            <TouchableOpacity style={styles.style13}>
                                <Text style={styles.style14} >Capture</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.style15}>
                                <Text style={styles.style14} >Clear</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={styles.style7}>
                    <View style={styles.style8}>
                        <View style={styles.style16}>
                            <Text style={styles.style17}>
                                Capture Comparing
                            </Text>
                            <View style={styles.style18}></View>
                        </View>
                        <View style={styles.style7}>
                            <TouchableOpacity style={styles.style19}>
                                <Text style={styles.style14} >Compare With Database</Text>
                                <Image source={require('../assets/icons/sync_white_24dp.svg')} style={styles.style20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.style8}>
                        <View style={styles.style16}>
                            <Text style={styles.style17}>
                                Output
                            </Text>
                            <View style={styles.style18}></View>
                        </View>
                        <View style={styles.style7}>
                            <Text style={styles.style21} >Access Granted</Text>
                            <Image source={require('../assets/icons/check-circle-solid.svg')} style={styles.style22} />
                        </View>
                    </View>
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
        padding: 50
    },
    style4: {
        addingBottom: 50,
        paddingRight: 40,
        width: "100%"
    },
    style5: {
        fontSize: 30,
        color: "white",
        paddingBottom: 10
    },
    style6: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    style7: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row'
    },
    style8: {
        width: "50%"
    },
    style9: {
        fontSize: 20,
        color: "white",
        paddingBottom: 10,
        marginLeft: 5
    },
    style10: {
        backgroundColor: "white",
        width: "90%",
        height: 250,
        borderRadius: 5
    },
    style11: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    style12: {
        width: "90%",
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    style13: {
        width: "40%",
        height: 30,
        backgroundColor: "#5776f2",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    style14: {
        color: "white",
        fontSize: 18
    },
    style15: {
        width: "40%",
        height: 30,
        backgroundColor: "red",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    style16: {
        paddingBottom: 50,
        paddingRight: 40,
        width: "100%"
    },
    style17: {
        fontSize: 25,
        color: "white",
        paddingBottom: 10
    },
    style18: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    style19: {
        width: "90%",
        height: 40,
        backgroundColor: "#02e6c8",
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    style20: {
        resizeMode: "contain",
        marginLeft: 5,
        width: 27,
        height: 27
    },
    style21: {
        color: "#34d27b",
        fontSize: 30,
        fontWeight: '500'
    },
    style22: {
        resizeMode: "contain",
        marginLeft: 5,
        marginTop: 5,
        width: 30,
        height: 30
    }
});

export default SecondPage;