import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';


type MyProps = {

};
type MyState = {
    companyName: string
};

export default class RecognitionWelcomePageView extends React.Component<MyProps, MyState> {
    state: MyState = {
        companyName: "Informatics Institute of Technology"
    };

    render() {
        return (
            <View style={{ backgroundColor: "#f7f7f7", display: 'flex', flexDirection: 'row', width: "100%", height: "100%" }}>
                <View style={{ height: "100%", width: "50%" }}>
                    <Image source={require('../assets/images/WelcomeScreenBackgroundImage.jpg')} style={{ borderBottomRightRadius: 1200, borderTopRightRadius: 1000, marginTop: -100, marginLeft: "-20%", resizeMode: 'cover', width: "120%", height: "99%" }} />
                </View>
                <View style={{ height: "100%", width: "45%", marginLeft: "0%", paddingLeft: "5%" }}>
                    <Image source={require('../assets/images/ProjectMOFI_Background_Image_White.jpeg')} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                    <View style={{ position: 'relative', bottom: "55%", left: "10%" }}>
                        <Text style={{ color: "green", fontSize: 70, fontWeight: '500' }}>WELCOME</Text>
                        <Text style={{ color: "black", fontSize: 35, fontWeight: '500' }}>To the</Text>
                        <Text style={{ color: "red", fontSize: 30, fontWeight: '500' }}>{this.state.companyName}</Text>
                    </View>
                </View>
                <View style={{ position: 'absolute', borderColor: "#eae780", borderWidth: 3, borderBottomRightRadius: 1200, borderTopRightRadius: 1000, marginTop: -100, marginLeft: "-5%", height: "100%", width: "60%" }}></View>
                <View style={{ position: 'absolute', borderColor: "#2a5373", borderWidth: 3, borderBottomRightRadius: 1200, borderTopRightRadius: 1000, marginTop: -200, marginLeft: "-3%", height: "140%", width: "60%" }}></View>
            </View>
        );
    }
}