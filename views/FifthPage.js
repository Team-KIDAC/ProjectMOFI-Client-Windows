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


const FifthPage: () => Node = () => {

    var pageData = {
        "name_of_user": "Dewmin Madiwila",
        "id": "E1",
        "name": "Arunodi Gamage",
        "side_image": require('../assets/images/masked_face_side_view.jpg'),
        "date_time": [
            {
                "date": "04/02/2022",
                "arrieved_time": "07 : 04 : 43"
            },
            {
                "date": "05/02/2022",
                "arrieved_time": "07 : 15 : 55"
            },
            {
                "date": "06/02/2022",
                "arrieved_time": "07 : 16 : 02"
            },
            {
                "date": "07/02/2022",
                "arrieved_time": "07 : 56 : 12"
            },
            {
                "date": "08/02/2022",
                "arrieved_time": "08 : 13 : 22"
            }
        ]
    }

    return (
        <View style={styles.style1}>
            <View style={styles.style2}>
                <SideBar name={pageData.name_of_user} />
            </View>
            <View style={styles.style3}>
                <View style={styles.style4}>
                    <Text style={styles.style5}>
                        View Employee Data
                    </Text>
                    <View style={styles.style6}></View>
                </View>
                <View style={styles.style7}>
                    <View style={styles.style8}>
                        <Text style={styles.style9}>Emp ID</Text>
                        <Text style={styles.style10}>Emp Name</Text>
                        <Text style={styles.style11}>Date</Text>
                        <Text style={styles.style11}>Arrived Time</Text>
                        <Text style={styles.styles12}>Photo</Text>
                    </View>

                    <View style={styles.style13}>
                        <View style={styles.style14}>
                            <Text style={styles.style15}>{pageData.id}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style15}>{pageData.name}</Text>
                        </View>
                        <View style={styles.style17}>
                            <Text style={styles.style15}>{pageData.date_time[0].date}</Text>
                        </View>
                        <View style={styles.style17}>
                            <Text style={styles.style15}>{pageData.date_time[0].arrieved_time}</Text>
                        </View>
                        <View style={styles.style18}>
                            <Image source={pageData.side_image} style={styles.style19} />
                        </View>
                    </View>
                    <View style={styles.style20}>
                        <View style={styles.style21}>
                            <Text style={styles.style22}>{pageData.id}</Text>
                        </View>
                        <View style={styles.style23}>
                            <Text style={styles.style22}>{pageData.name}</Text>
                        </View>
                        <View style={styles.style24}>
                            <Text style={styles.style22}>{pageData.date_time[1].date}</Text>
                        </View>
                        <View style={styles.style24}>
                            <Text style={styles.style22}>{pageData.date_time[1].arrieved_time}</Text>
                        </View>
                        <View style={styles.style25}>
                            <Image source={pageData.side_image} style={styles.style26} />
                        </View>
                    </View>
                    <View style={styles.style20}>
                        <View style={styles.style21}>
                            <Text style={styles.style22}>{pageData.id}</Text>
                        </View>
                        <View style={styles.style23}>
                            <Text style={styles.style22}>{pageData.name}</Text>
                        </View>
                        <View style={styles.style24}>
                            <Text style={styles.style22}>{pageData.date_time[2].date}</Text>
                        </View>
                        <View style={styles.style24}>
                            <Text style={styles.style22}>{pageData.date_time[2].arrieved_time}</Text>
                        </View>
                        <View style={styles.style25}>
                            <Image source={pageData.side_image} style={styles.style26} />
                        </View>
                    </View>
                    <View style={styles.style20}>
                        <View style={styles.style21}>
                            <Text style={styles.style22}>{pageData.id}</Text>
                        </View>
                        <View style={styles.style23}>
                            <Text style={styles.style22}>{pageData.name}</Text>
                        </View>
                        <View style={styles.style24}>
                            <Text style={styles.style22}>{pageData.date_time[3].date}</Text>
                        </View>
                        <View style={styles.style24}>
                            <Text style={styles.style22}>{pageData.date_time[3].arrieved_time}</Text>
                        </View>
                        <View style={styles.style25}>
                            <Image source={pageData.side_image} style={styles.style26} />
                        </View>
                    </View>
                    <View style={styles.style20}>
                        <View style={styles.style21}>
                            <Text style={styles.style22}>{pageData.id}</Text>
                        </View>
                        <View style={styles.style23}>
                            <Text style={styles.style22}>{pageData.name}</Text>
                        </View>
                        <View style={styles.style24}>
                            <Text style={styles.style22}>{pageData.date_time[4].date}</Text>
                        </View>
                        <View style={styles.style24}>
                            <Text style={styles.style22}>{pageData.date_time[4].arrieved_time}</Text>
                        </View>
                        <View style={styles.style25}>
                            <Image source={pageData.side_image} style={styles.style26} />
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
        paddingBottom: 50,
        paddingRight: 40,
        width: "100%",
        height: "15%"
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
        height: "85%"
    },
    style8: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        width: "100%",
        height: "10%"
    },
    style9: {
        fontSize: 20,
        color: "white",
        width: "15%"
    },
    style10: {
        fontSize: 20,
        color: "white",
        width: "30%"
    },
    style11: {
        fontSize: 20,
        color: "white",
        width: "20%"
    },
    style12: {
        fontSize: 20,
        color: "white",
        width: "15%"
    },
    style13: {
        backgroundColor: "white",
        width: "100%",
        height: "14%",
        marginBottom: "2%",
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row'
    },
    style14: {
        height: "100%",
        width: "15%",
        paddingLeft: 20,
        justifyContent: 'center'
    },
    style15: {
        fontSize: 20,
        color: "black"
    },
    style16: {
        height: "100%",
        width: "30%",
        justifyContent: 'center'
    },
    style17: {
        height: "100%",
        width: "20%",
        justifyContent: 'center'
    },
    style18: {
        height: "100%",
        width: "15%",
        padding: 5,
        justifyContent: 'center'
    },
    style19: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    style20: {
        backgroundColor: "white",
        width: "100%",
        height: "14%",
        marginBottom: "2%",
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row'
    },
    style21: {
        height: "100%",
        width: "15%",
        paddingLeft: 20,
        justifyContent: 'center'
    },
    style22: {
        fontSize: 20,
        color: "black"
    },
    style23: {
        height: "100%",
        width: "30%",
        justifyContent: 'center'
    },
    style24: {
        height: "100%",
        width: "20%",
        justifyContent: 'center'
    },
    style25: {
        height: "100%",
        width: "15%",
        padding: 5,
        justifyContent: 'center'
    },
    style26: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    }
});

export default FifthPage;