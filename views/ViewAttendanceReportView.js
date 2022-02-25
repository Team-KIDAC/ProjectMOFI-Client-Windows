import React, { Component } from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';
import AttendanceReportRecord from '../components/AttendanceReportRecord';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-windows';


var AttendanceRecordListItem = ({ item }) => (
    <View style={styles.AttendanceRecordListItemView}>
        <View style={styles.AttendanceRecordListItemIdView}>
            <Text style={styles.AttendanceRecordListItemText}>{item.id}</Text>
        </View>
        <View style={styles.AttendanceRecordListItemNameView}>
            <Text style={styles.AttendanceRecordListItemText}>{item.name}</Text>
        </View>
        <View style={styles.AttendanceRecordListItemDepartmentView}>
            <Text style={styles.AttendanceRecordListItemText}>{item.department}</Text>
        </View>
        <View style={styles.AttendanceRecordListItemVaccineView}>
            <Text style={styles.AttendanceRecordListItemText}>{item.vaccine}</Text>
        </View>
        <View style={styles.AttendanceRecordListItemImageView}>
            <Image source={require('../assets/images/masked_face_side_view.jpg')} style={styles.AttendanceRecordListItemImageImage} />
        </View>
    </View>
);

class ViewAttendanceReportView extends Component {

    state = {
        pageData: [{
            "id": "E4",
            "name": "Thisula Madiwila",
            "department": "CS",
            "vaccine": "AstraZeneca",
            "side_image": require('../assets/images/masked_face_side_view.jpg')
        }]
    }

    render() {
        this.getDetails();

        return (
            <View>
                <View style={styles.PageWrapperView}>
                    <View style={styles.PageTitleView}>
                        <Text style={styles.PageTitleText}>
                            View Attendance Report
                        </Text>
                        <View style={styles.PageTitleUnderlineView}></View>
                    </View>
                    <View style={styles.PageContentView}>
                        <View style={styles.AttendanceRecordListItemTitlesView}>
                            <Text style={styles.AttendanceRecordListItemTitleIdPhotoText}>Emp ID</Text>
                            <Text style={styles.AttendanceRecordListItemTitleNameText}>Emp Name</Text>
                            <Text style={styles.AttendanceRecordListItemDepVacText}>Dep Name</Text>
                            <Text style={styles.AttendanceRecordListItemDepVacText}>Vaccine</Text>
                            <Text style={styles.AttendanceRecordListItemTitleIdPhotoText}>Photo</Text>
                        </View>
                        <View style={styles.AttendanceRecordListItemWrapperView}>
                            <FlatList data={this.state.pageData} keyExtractor={(item) => item.id} renderItem={AttendanceRecordListItem} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    getDetails = async () => {
        const request = new XMLHttpRequest();

        request.open("GET", "http://localhost:5118/User");
        request.send();
        request.onload = () => {

            if (request.status == 200) {
                this.setState({ pageData: JSON.parse(request.response) });
            } else {
                console.log(`error ${request.status}`);
            }
        }
    }

}

const styles = StyleSheet.create({
    AttendanceRecordListItemView: {
        backgroundColor: "white",
        width: "100%",
        height: 100,
        marginBottom: "2%",
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row'
    },
    AttendanceRecordListItemIdView: {
        height: "100%",
        width: "15%",
        paddingLeft: 20,
        justifyContent: 'center'
    },
    AttendanceRecordListItemNameView: {
        height: "100%",
        width: "30%",
        justifyContent: 'center'
    },
    AttendanceRecordListItemDepartmentView: {
        height: "100%",
        width: "20%",
        justifyContent: 'center'
    },
    AttendanceRecordListItemVaccineView: {
        height: "100%",
        width: "20%",
        justifyContent: 'center'
    },
    AttendanceRecordListItemImageView: {
        height: "100%",
        width: "15%",
        padding: 5,
        justifyContent: 'center'
    },
    AttendanceRecordListItemText: {
        fontSize: 20,
        color: "black"
    },
    AttendanceRecordListItemImageImage: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    PageWrapperView: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: 'column',
        padding: 50
    },
    PageTitleView: {
        paddingBottom: 50,
        paddingRight: 40,
        width: "100%",
        height: "15%"
    },
    PageTitleText: {
        fontSize: 30,
        color: "white",
        paddingBottom: 10
    },
    PageTitleUnderlineView: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    PageContentView: {
        width: "100%",
        height: "85%"
    },
    AttendanceRecordListItemTitlesView: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        width: "100%",
        height: "10%"
    },
    AttendanceRecordListItemTitleIdPhotoText: {
        fontSize: 20,
        color: "white",
        width: "15%"
    },
    AttendanceRecordListItemTitleNameText: {
        fontSize: 20,
        color: "white",
        width: "30%"
    },
    AttendanceRecordListItemDepVacText: {
        fontSize: 20,
        color: "white",
        width: "20%"
    },
    AttendanceRecordListItemWrapperView: {
        width: "100%",
        height: "90%"
    }
});


export default ViewAttendanceReportView;