import React from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';


const SeventhPage: () => Node = () => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: "#011e36", height: "100%", padding: 10 }}>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "60%", paddingTop: 10, paddingRight: 10 }}>
                <Image source={require('../assets/images/ProjectMOFI.svg')} style={{ resizeMode: "contain", width: "100%", height: "100%" }} />
            </View>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "40%", display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                <View style={{ width: "75%", height: "10%" }}>
                    <Text style={{ fontSize: 25, color: "white", paddingBottom: 10 }}>
                        Log In
                    </Text>
                    <View style={{ backgroundColor: "#02e6c8", height: 2, width: "100%", marginLeft: -10 }}></View>
                </View>
                <View style={{ width: "100%" }}>
                    <Text style={{ fontSize: 20, color: "white", paddingBottom: 5 }}>Username*</Text>
                    <TextInput style={{ borderRadius: 7, marginBottom: 20, backgroundColor: "white", width: "70%" }} />
                    <Text style={{ fontSize: 20, color: "white", paddingBottom: 5 }}>Password*</Text>
                    <TextInput style={{ borderRadius: 7, marginBottom: 20, backgroundColor: "white", width: "70%" }} />

                    <TouchableOpacity style={{ backgroundColor: "#02e6c8", height: 30, width: "50%", borderRadius: 7, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}

export default SeventhPage;