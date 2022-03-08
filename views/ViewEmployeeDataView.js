import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

var pageData = {
    "name_of_user": "Dewmin Madiwila",
    "id": "E3",
    "name": "Dewmin Madiwila",
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

class ViewEmployeeDataView extends Component {
    render() {
        return (
            <View>
                <View style={styles.PageWrapperView}>
                    <View style={styles.PageTitleView}>
                        <Text style={styles.PageTitleText}>
                            View Employee Data
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

                        <View style={styles.AttendanceRecordListItemView}>
                            <View style={styles.AttendanceRecordListItemIdView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.id}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemNameView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.name}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[0].date}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[0].arrieved_time}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemPhotoView}>
                                <Image source={pageData.side_image} style={styles.AttendanceRecordListItemPhotoImage} />
                            </View>
                        </View>
                        <View style={styles.AttendanceRecordListItemView}>
                            <View style={styles.AttendanceRecordListItemIdView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.id}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemNameView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.name}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[1].date}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[1].arrieved_time}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemPhotoView}>
                                <Image source={pageData.side_image} style={styles.AttendanceRecordListItemPhotoImage} />
                            </View>
                        </View>
                        <View style={styles.AttendanceRecordListItemView}>
                            <View style={styles.AttendanceRecordListItemIdView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.id}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemNameView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.name}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[2].date}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[2].arrieved_time}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemPhotoView}>
                                <Image source={pageData.side_image} style={styles.AttendanceRecordListItemPhotoImage} />
                            </View>
                        </View>
                        <View style={styles.AttendanceRecordListItemView}>
                            <View style={styles.AttendanceRecordListItemIdView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.id}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemNameView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.name}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[3].date}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[3].arrieved_time}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemPhotoView}>
                                <Image source={pageData.side_image} style={styles.AttendanceRecordListItemPhotoImage} />
                            </View>
                        </View>
                        <View style={styles.AttendanceRecordListItemView}>
                            <View style={styles.AttendanceRecordListItemIdView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.id}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemNameView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.name}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[4].date}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemDateTimeView}>
                                <Text style={styles.AttendanceRecordListItemText}>{pageData.date_time[4].arrieved_time}</Text>
                            </View>
                            <View style={styles.AttendanceRecordListItemPhotoView}>
                                <Image source={pageData.side_image} style={styles.AttendanceRecordListItemPhotoImage} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
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
    AttendanceRecordListItemTitleDateTimeText: {
        fontSize: 20,
        color: "white",
        width: "20%"
    },
    AttendanceRecordListItemView: {
        backgroundColor: "white",
        width: "100%",
        height: "14%",
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
    AttendanceRecordListItemText: {
        fontSize: 20,
        color: "black"
    },
    AttendanceRecordListItemNameView: {
        height: "100%",
        width: "30%",
        justifyContent: 'center'
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
    }
});

export default ViewEmployeeDataView;