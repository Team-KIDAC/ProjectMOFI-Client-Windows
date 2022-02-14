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


const FourthPage: () => Node = () => {

    var pageData = {
        "name_of_user": "Dewmin Madiwila",
        "employee_data": [
            {
                "id": "E1",
                "name": "Arunodi Gamage",
                "department": "CS",
                "vaccine": "Pfizer",
                "side_image": require('../assets/images/masked_face_side_view.jpg')
            },
            {
                "id": "E2",
                "name": "Senesh Fernando",
                "department": "CS",
                "vaccine": "Sputnik V",
                "side_image": require('../assets/images/masked_face_side_view.jpg')
            },
            {
                "id": "E3",
                "name": "Manthini Abhayarathna",
                "department": "CS",
                "vaccine": "Sinopharm",
                "side_image": require('../assets/images/masked_face_side_view.jpg')
            },
            {
                "id": "E4",
                "name": "Thisula Madiwila",
                "department": "CS",
                "vaccine": "AstraZeneca",
                "side_image": require('../assets/images/masked_face_side_view.jpg')
            },
            {
                "id": "E5",
                "name": "Rithmal Abayakoon",
                "department": "CS",
                "vaccine": "Dhammika Pani",
                "side_image": require('../assets/images/masked_face_side_view.jpg')
            },

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
                        View Attendance Report
                    </Text>
                    <View style={styles.style6}></View>
                </View>
                <View style={styles.style7}>
                    <View style={styles.style8}>
                        <Text style={styles.style9}>Emp ID</Text>
                        <Text style={styles.style10}>Emp Name</Text>
                        <Text style={styles.style11}>Dep Name</Text>
                        <Text style={styles.style11}>Vaccine</Text>
                        <Text style={styles.style9}>Photo</Text>
                    </View>

                    <View style={styles.style12}>
                        <View style={styles.style13}>
                            <Text style={styles.style14}>{pageData.employee_data[0].id}</Text>
                        </View>
                        <View style={styles.style15}>
                            <Text style={styles.style14}>{pageData.employee_data[0].name}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[0].department}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[0].vaccine}</Text>
                        </View>
                        <View style={styles.style17}>
                            <Image source={pageData.employee_data[0].side_image} style={styles.style18} />
                        </View>
                    </View>
                    <View style={styles.style12}>
                        <View style={styles.style13}>
                            <Text style={styles.style14}>{pageData.employee_data[1].id}</Text>
                        </View>
                        <View style={styles.style15}>
                            <Text style={styles.style14}>{pageData.employee_data[1].name}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[1].department}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[1].vaccine}</Text>
                        </View>
                        <View style={styles.style17}>
                            <Image source={pageData.employee_data[1].side_image} style={styles.style18} />
                        </View>
                    </View>
                    <View style={styles.style12}>
                        <View style={styles.style13}>
                            <Text style={styles.style14}>{pageData.employee_data[2].id}</Text>
                        </View>
                        <View style={styles.style15}>
                            <Text style={styles.style14}>{pageData.employee_data[2].name}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[2].department}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[2].vaccine}</Text>
                        </View>
                        <View style={styles.style17}>
                            <Image source={pageData.employee_data[2].side_image} style={styles.style18} />
                        </View>
                    </View>
                    <View style={styles.style12}>
                        <View style={styles.style13}>
                            <Text style={styles.style14}>{pageData.employee_data[3].id}</Text>
                        </View>
                        <View style={styles.style15}>
                            <Text style={styles.style14}>{pageData.employee_data[3].name}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[3].department}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[3].vaccine}</Text>
                        </View>
                        <View style={styles.style17}>
                            <Image source={pageData.employee_data[3].side_image} style={styles.style18} />
                        </View>
                    </View>
                    <View style={styles.style12}>
                        <View style={styles.style13}>
                            <Text style={styles.style14}>{pageData.employee_data[4].id}</Text>
                        </View>
                        <View style={styles.style15}>
                            <Text style={styles.style14}>{pageData.employee_data[4].name}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[4].department}</Text>
                        </View>
                        <View style={styles.style16}>
                            <Text style={styles.style14}>{pageData.employee_data[4].vaccine}</Text>
                        </View>
                        <View style={styles.style17}>
                            <Image source={pageData.employee_data[4].side_image} style={styles.style18} />
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
        height: "100%", padding: 10
    },

    style2: {
        backgroundColor: "#011e36",
        height: "100%", width: "20%",
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
        backgroundColor: "white",
        width: "100%",
        height: "14%",
        marginBottom: "2%",
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row'
    },

    style13: {
        height: "100%",
        width: "15%",
        paddingLeft: 20,
        justifyContent: 'center'
    },

    style14: {
        fontSize: 20,
        color: "black"
    },

    style15: {
        height: "100%",
        width: "30%",
        justifyContent: 'center'
    },

    style16: {
        height: "100%",
        width: "20%",
        justifyContent: 'center'
    },

    style17: {
        height: "100%",
        width: "15%",
        padding: 5,
        justifyContent: 'center'
    },

    style18: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },

});

export default FourthPage;