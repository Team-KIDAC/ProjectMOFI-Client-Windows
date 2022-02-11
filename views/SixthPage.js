import React from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';


const SixthPage: () => Node = () => {

    var pageData = {
        "name_of_user": "Dewmin Madiwila"
    }

    return (
        <View style={{ flexDirection: "row", backgroundColor: "#011e36", height: "100%", padding: 10 }}>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "20%", borderColor: "#02e6c8", borderRightWidth: 5, paddingTop: 10, paddingRight: 10 }}>
                <SideBar name={pageData.name_of_user} />
            </View>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "80%", display: "flex", flexDirection: 'column', padding: 50, paddingLeft: 100 }}>
                <View style={{ width: 350, height: "20%" }}>
                    <Text style={{ color: "white", fontSize: 50, fontWeight: '600' }}>WELCOME !</Text>
                    <Text style={{ color: "white", fontSize: 20 }}>To the attendance system using masked face recognition.</Text>
                </View>
                <View style={{ height: "80%", width: "100%" }}>
                    <Image source={require('../assets/images/ProjectMOFI_Background_Image.jpg')} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                </View>
            </View>
        </View>
    );

}

export default SixthPage;