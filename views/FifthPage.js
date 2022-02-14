import React from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
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
        <View style={{ flexDirection: "row", backgroundColor: "#011e36", height: "100%", padding: 10 }}>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "20%", borderColor: "#02e6c8", borderRightWidth: 5, paddingTop: 10, paddingRight: 10 }}>
                <SideBar name={pageData.name_of_user} />
            </View>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "80%", display: "flex", flexDirection: 'column', padding: 50 }}>
                <View style={{ paddingBottom: 50, paddingRight: 40, width: "100%", height: "15%" }}>
                    <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
                        View Employee Data
                    </Text>
                    <View style={{ backgroundColor: "#02e6c8", height: 2, width: "100%" }}></View>
                </View>
                <View style={{ width: "100%", height: "85%" }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, width: "100%", height: "10%" }}>
                        <Text style={{ fontSize: 20, color: "white", width: "15%" }}>Emp ID</Text>
                        <Text style={{ fontSize: 20, color: "white", width: "30%" }}>Emp Name</Text>
                        <Text style={{ fontSize: 20, color: "white", width: "20%" }}>Date</Text>
                        <Text style={{ fontSize: 20, color: "white", width: "20%" }}>Arrieved Time</Text>
                        <Text style={{ fontSize: 20, color: "white", width: "15%" }}>Photo</Text>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[0].date}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[0].arrieved_time}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[1].date}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[1].arrieved_time}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[2].date}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[2].arrieved_time}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[3].date}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[3].arrieved_time}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[4].date}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.date_time[4].arrieved_time}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>


                </View>
            </View>
        </View>
    );

}

export default FifthPage;