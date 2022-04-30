import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';
import { AttendeeClient, IAttendeeClient } from '../ApiClient/ApiClient';

type MyProps = {

};
type MyState = {
    pageData: any
};

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
            <Image source={{ uri: item.imagePath }} style={styles.AttendanceRecordListItemImageImage} />
        </View>
    </View>
);

export default class ViewEmployeeDataView extends React.Component<MyProps, MyState> {
    state: MyState = {
        pageData: []
    }

    loadAttendees = async () => {
        let apiClient: IAttendeeClient = new AttendeeClient();
        apiClient.getAttendees().then((_response: string | null) => {
            this.setState({ pageData: JSON.parse(String(_response)) });
        })
    }

    render() {
        this.loadAttendees();
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
    AttendanceRecordListItemText: {
        fontSize: 20,
        color: "black"
    },
    AttendanceRecordListItemImageImage: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    AttendanceRecordListItemNameView: {
        height: "100%",
        width: "30%",
        justifyContent: 'center'
    },
    AttendanceRecordListItemImageView: {
        height: "100%",
        width: "15%",
        padding: 5,
        justifyContent: 'center'
    },
    AttendanceRecordListItemVaccineView: {
        height: "100%",
        width: "20%",
        justifyContent: 'center'
    },
    AttendanceRecordListItemDepartmentView: {
        height: "100%",
        width: "20%",
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