import React, { Component } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';


class LoggedWelcomePageView extends Component {
    render() {
        return (
            <View>
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

}

export default LoggedWelcomePageView;