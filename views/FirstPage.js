import React from 'react';
import type { Node } from 'react';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
    Touchable,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
} from 'react-native';

import SideBar from '../components/SideBar';

const FirstPage: () => Node = () => {

    var pageData = {
        "name_of_user": "Dewmin Madiwila",
        "side_image": require('../assets/images/masked_face_side_view.jpg'),
        "image0": require('../assets/images/masked_face_side_view.jpg'),
        "image1": require('../assets/images/masked_face_side_view.jpg'),
        "image2": require('../assets/images/masked_face_side_view.jpg'),
        "image3": require('../assets/images/masked_face_side_view.jpg'),
        "image4": require('../assets/images/masked_face_side_view.jpg'),
        "image5": require('../assets/images/masked_face_side_view.jpg')
    }

    return (
        <View style={styles.mainWindowView}>
            <View style={styles.sideBarWindow}>
                <SideBar name={pageData.name_of_user} />
            </View>
            <View style={styles.contentSectionView}>
                <View style={styles.halfContentSectionView}>
                    <View style={styles.topicSection}>
                        <Text style={styles.topicText}>
                            Add New Employee
                        </Text>
                        <View style={styles.topicBottomLine}></View>
                    </View>
                    <View style={styles.employeeDetailsView}>
                        <Text style={styles.inputTopic}>Employee ID</Text>
                        <TextInput style={styles.inputText} />
                        <Text style={styles.inputTopic}>Employee Name</Text>
                        <TextInput style={styles.inputText} />
                        <Text style={styles.inputTopic}>Department Name</Text>
                        <TextInput style={styles.inputText} />
                        <Text style={styles.inputTopic}>Vaccination Name</Text>
                        <TextInput style={styles.inputText} />

                        <Text style={styles.inputTopic}>Photos (6 Photos)</Text>
                        <View style={styles.capturedSmallImagesView}>
                            <Image source={pageData.image0} style={styles.capturedSmallImage} />
                            <Image source={pageData.image1} style={styles.capturedSmallImage} />
                            <Image source={pageData.image2} style={styles.capturedSmallImage} />
                            <Image source={pageData.image3} style={styles.capturedSmallImage} />
                            <Image source={pageData.image4} style={styles.capturedSmallImage} />
                            <Image source={pageData.image5} style={styles.capturedSmallImage} />
                        </View>

                    </View>

                </View>
                <View style={styles.halfContentSectionView}>
                    <View style={styles.topicSection}>
                        <Text style={styles.topicText}>
                            Capture Photo
                        </Text>
                        <View style={styles.topicBottomLine}></View>
                    </View>
                    <View style={styles.employeeDetailsView}>
                        <View style={styles.bigImageView}>
                            <Image source={pageData.side_image} style={styles.bigImage} />
                        </View>
                        <View style={styles.captureClearButtonView}>
                            <TouchableOpacity style={styles.captureButton}>
                                <Text style={styles.captureClearButtonText} >Capture</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.clearButton}>
                                <Text style={styles.captureClearButtonText} >Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <TouchableOpacity style={styles.saveButton}>
                                <Text style={styles.saveButtonText} >SAVE EMPLOYEE DATA</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainWindowView: {
        flexDirection: "row",
        backgroundColor: "#011e36",
        height: "100%",
        padding: 10
    },
    sideBarWindow: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "20%",
        borderColor: "#02e6c8",
        borderRightWidth: 5,
        paddingTop: 10,
        paddingRight: 10
    },
    contentSectionView: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "80%",
        display: "flex",
        flexDirection: 'row'
    },
    halfContentSectionView: {
        height: "100%",
        width: "50%",
        padding: 50
    },
    topicSection: {
        height: "15%",
        width: "100%"
    },
    employeeDetailsView: {
        height: "85%",
        width: "100%"
    },
    topicBottomLine: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%"
    },
    topicText: {
        fontSize: 30,
        color: "white",
        paddingBottom: 10
    },
    inputTopic: {
        fontSize: 20,
        color: "white",
        paddingLeft: 5,
        paddingBottom: 5
    },
    inputText: {
        borderRadius: 7,
        marginBottom: 20,
        backgroundColor: "white"
    },
    capturedSmallImagesView: {
        backgroundColor: "white",
        width: "100%",
        height: 180,
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    capturedSmallImage: {
        resizeMode: "contain",
        height: "50%",
        width: "30%"
    },
    bigImageView: {
        backgroundColor: "white",
        width: "100%",
        height: 350,
        borderRadius: 7
    },
    bigImage: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    captureClearButtonView: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    captureButton: {
        width: "40%",
        height: 30,
        backgroundColor: "#5776f2",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    clearButton: {
        width: "40%",
        height: 30,
        backgroundColor: "red",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    saveButton: {
        width: "100%",
        height: 30,
        backgroundColor: "#02e6c8",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    captureClearButtonText: {
        color: "white",
        fontSize: 18
    },
    saveButtonText: {
        color: "white",
        fontSize: 20
    }
});

export default FirstPage;