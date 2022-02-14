import React from 'react';
import type { Node } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';


const TwelfthPage: () => Node = () => {

    var welcomePageData = {
        "company_name":"Informatics Institute of Technology" 
    }

    return (
        <View style={styles.style1}>
            <View style={styles.style2}>
                <Image source={require('../assets/images/WelcomeScreenBackgroundImage.jpg')} style={styles.style3} />
            </View>
            <View style={styles.style4}>
                <Image source={require('../assets/images/ProjectMOFI_Background_Image_White.jpeg')} style={styles.style5} />
                <View style={styles.style6}>
                    <Text style={styles.style7}>WELCOME</Text>
                    <Text style={styles.style8}>To the</Text>
                    <Text style={styles.style9}>{welcomePageData.company_name}</Text>

                </View>
            </View>
            <View style={styles.style10}></View>
            <View style={styles.style11}></View>
        </View>
    );

}

const styles = StyleSheet.create({
    style1: {
        backgroundColor: "#f7f7f7",
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        height: "100%"
    },
    style2: {
        height: "100%",
        width: "50%"
    },
    style3: {
        borderBottomRightRadius: 1200,
        borderTopRightRadius: 1000,
        marginTop: -100,
        marginLeft: "-20%",
        resizeMode: 'cover',
        width: "120%",
        height: "99%"
    },
    style4: {
        height: "100%",
        width: "45%",
        marginLeft: "0%",
        paddingLeft: "5%"
    },
    style5: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    style6: {
        position: 'relative',
        bottom: "55%",
        left: "10%"
    },
    style7: {
        color: "green",
        fontSize: 70,
        fontWeight: '500'
    },
    style8: {
        color: "black",
        fontSize: 35,
        fontWeight: '500'
    },
    style9: {
        color: "red",
        fontSize: 30,
        fontWeight: '500'
    },
    style10: {
        position: 'absolute',
        borderColor: "#eae780",
        borderWidth: 3,
        borderBottomRightRadius: 1200,
        borderTopRightRadius: 1000,
        marginTop: -100,
        marginLeft: "-5%",
        height: "100%",
        width: "60%"
    },
    style11: {
        position: 'absolute',
        borderColor: "#2a5373",
        borderWidth: 3,
        borderBottomRightRadius: 1200,
        borderTopRightRadius: 1000,
        marginTop: -200,
        marginLeft: "-3%",
        height: "140%",
        width: "60%"
    },
});

export default TwelfthPage;