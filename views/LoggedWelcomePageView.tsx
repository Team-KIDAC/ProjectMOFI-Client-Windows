import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

type MyProps = {

};
type MyState = {

};

class LoggedWelcomePageView extends React.Component<MyProps, MyState> {
    render() {
        return (
            <View>
                <View style={styles.pageWrapperView}>
                    <View style={styles.welcomeTextWrapperView}>
                        <Text style={styles.welcomeText1}>WELCOME !</Text>
                        <Text style={styles.welcomeText2}>To the attendance system using masked face recognition.</Text>
                    </View>
                    <View style={styles.backgroundImgSectionView}>
                        <Image source={require('../assets/images/ProjectMOFI_Background_Image.jpg')} style={styles.backgroundImage} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageWrapperView: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "80%",
        display: "flex",
        flexDirection: 'column',
        padding: 50,
        paddingLeft: 100
    },
    welcomeTextWrapperView: {
        width: 350,
        height: "20%"
    },
    welcomeText1: {
        color: "white",
        fontSize: 50,
        fontWeight: '600'
    },
    welcomeText2: {
        color: "white",
        fontSize: 20
    },
    backgroundImgSectionView: {
        height: "80%",
        width: "100%"
    },
    backgroundImage: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    }
});

export default LoggedWelcomePageView;