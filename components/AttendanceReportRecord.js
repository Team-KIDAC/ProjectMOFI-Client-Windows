import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

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
            "name": "Manthini Abayarathna",
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

class AttendanceReportRecord extends Component {
    render() {
        return (
            <View style={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'row' }}>
                <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[0].id}</Text>
                </View>
                <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[0].name}</Text>
                </View>
                <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[0].department}</Text>
                </View>
                <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[0].vaccine}</Text>
                </View>
                <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                    <Image source={pageData.employee_data[0].side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                </View>
            </View>
        );
    }
}

export default AttendanceReportRecord;