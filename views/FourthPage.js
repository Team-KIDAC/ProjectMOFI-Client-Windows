import React from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
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

    return (
        <View style={{ flexDirection: "row", backgroundColor: "#011e36", height: "100%", padding: 10 }}>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "20%", borderColor: "#02e6c8", borderRightWidth: 5, paddingTop: 10, paddingRight: 10 }}>
                <SideBar name={pageData.name_of_user} />
            </View>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "80%", display: "flex", flexDirection: 'column', padding: 50 }}>
                <View style={{ paddingBottom: 50, paddingRight: 40, width: "100%", height:"15%" }}>
                    <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
                        View Attendance Report
                    </Text>
                    <View style={{ backgroundColor: "#02e6c8", height: 2, width: "100%" }}></View>
                </View>
                <View style={{ width: "100%", height: "85%" }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, width: "100%", height: "10%" }}>
                        <Text style={{ fontSize: 20, color: "white", width:"15%" }}>Emp ID</Text>
                        <Text style={{ fontSize: 20, color: "white", width: "30%" }}>Emp Name</Text>
                        <Text style={{ fontSize: 20, color: "white", width: "20%" }}>Dep Name</Text>
                        <Text style={{ fontSize: 20, color: "white", width: "20%" }}>Vaccine</Text>
                        <Text style={{ fontSize: 20, color: "white", width: "15%" }}>Photo</Text>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
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
                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[1].id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[1].name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[1].department}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[1].vaccine}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.employee_data[1].side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[2].id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[2].name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[2].department}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[2].vaccine}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.employee_data[2].side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[3].id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[3].name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[3].department}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[3].vaccine}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.employee_data[3].side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "14%", marginBottom: "2%", borderRadius: 7, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ height: "100%", width: "15%", paddingLeft: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[4].id}</Text>
                        </View>
                        <View style={{ height: "100%", width: "30%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[4].name}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[4].department}</Text>
                        </View>
                        <View style={{ height: "100%", width: "20%", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: "black" }}>{pageData.employee_data[4].vaccine}</Text>
                        </View>
                        <View style={{ height: "100%", width: "15%", padding: 5, justifyContent: 'center' }}>
                            <Image source={pageData.employee_data[4].side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                    </View>


                </View>
            </View>
        </View>
    );

}

export default FourthPage;