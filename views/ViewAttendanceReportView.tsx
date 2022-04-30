import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';

import { IAttendanceRecordClient, AttendanceRecordClient } from '../ApiClient/ApiClient';

type MyProps = {

};
type MyState = {
    pageData: any
};

var AttendanceRecordListItem = ({ item }) => (
    <View style={styles.AttendanceRecordListItemView}>
        <View style={styles.AttendanceRecordListItemIdView}>
            <Text style={styles.AttendanceRecordListItemText}>{item.attendeeId}</Text>
        </View>
        <View style={styles.AttendanceRecordListItemNameView}>
            <Text style={styles.AttendanceRecordListItemText}>{item.attendeeName}</Text>
        </View>
        <View style={styles.AttendanceRecordListItemDateTimeView}>
            <Text style={styles.AttendanceRecordListItemText}>{item.attendanceDate}</Text>
        </View>
        <View style={styles.AttendanceRecordListItemDateTimeView}>
            <Text style={styles.AttendanceRecordListItemText}>{item.attendanceTime}</Text>
        </View>
        <View style={styles.AttendanceRecordListItemPhotoView}>
            <Image source={{ uri: item.imagePath }} style={styles.AttendanceRecordListItemPhotoImage} />
        </View>
    </View>
);

export default class ViewAttendanceReportView extends React.Component<MyProps, MyState> {
    state: MyState = {
        pageData: []
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
                            <Text style={styles.AttendanceRecordListItemTitleDateTimeText}>Date</Text>
                            <Text style={styles.AttendanceRecordListItemTitleDateTimeText}>Arrived Time</Text>
                            <Text style={styles.AttendanceRecordListItemTitleIdPhotoText}>Photo</Text>
                        </View>
                        <View style={styles.AttendanceRecordListItemWrapperView}>
                            <FlatList data={this.state.pageData} inverted keyExtractor={(item) => item.attendanceRecordId} renderItem={AttendanceRecordListItem} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }


    getDetails = async () => {
        let apiClient: IAttendanceRecordClient = new AttendanceRecordClient();
        apiClient.getAttendanceRecords().then((response: string | null) => this.setState({ pageData: JSON.parse(String(response)) }));
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
    AttendanceRecordListItemDateTimeView: {
        height: "100%",
        width: "20%",
        justifyContent: 'center'
    },
    AttendanceRecordListItemPhotoView: {
        height: "100%",
        width: "15%",
        padding: 5,
        justifyContent: 'center'
    },
    AttendanceRecordListItemPhotoImage: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
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
    AttendanceRecordListItemTitleDateTimeText: {
        fontSize: 20,
        color: "white",
        width: "20%"
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