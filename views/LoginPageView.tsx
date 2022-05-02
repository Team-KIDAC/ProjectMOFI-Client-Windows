import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';
import { AuthClient, IAuthClient } from '../ApiClient/ApiClient';
import LoggedInUser from '../models/LoggedInUserModel';

type MyProps = {
    //setAuthToken(authToken: string, loggedInUsername: string): any,
    setSelectedComp(compNum: number, sideBarStatus: boolean): any
};
type MyState = {
    LoginUsername: string,
    LoginPassword: string
};

export default class LoginPageView extends React.Component<MyProps, MyState> {

    state: MyState = {
        LoginUsername: "",
        LoginPassword: ""
    }

    sendLoginDetails = () => {
        let apiClient: IAuthClient = new AuthClient();
        apiClient.loginUser({
            username: this.state.LoginUsername,
            password: this.state.LoginPassword
        }).then((authToken: string) => {
            apiClient.loggedInUser(authToken).then((_response: Response | null) => {
                if (_response?.status == 200) {
                    _response.text().then((_responseText) => {
                        //this.props.setAuthToken(authToken, _responseText);
                        LoggedInUser.SetAuthToken(authToken);
                        LoggedInUser.SetUsername(_responseText);
                        this.props.setSelectedComp(1, true);
                    });
                }
            })
        });
    }

    render() {
        return (
            <View>
                <View style={styles.pageWrapper}>
                    <View style={styles.mainLogoSection}>
                        <Image source={require('../assets/images/ProjectMOFI.svg')} style={styles.mainLogoImage} />
                    </View>
                    <View style={styles.loginFuncSection}>
                        <View style={styles.sectionTopicView}>
                            <Text style={styles.sectionTopicText}>
                                Log In
                            </Text>
                            <View style={styles.sectionTopicUnderlineView}></View>
                        </View>
                        <View style={styles.sectionFuncView}>
                            <Text style={styles.funcTopicText}>Username*</Text>
                            <TextInput style={styles.funcInputTextInput} onChangeText={text => { this.setState({ LoginUsername: text }) }} />
                            <Text style={styles.funcTopicText}>Password*</Text>
                            <TextInput style={styles.funcInputTextInput} onChangeText={text => { this.setState({ LoginPassword: text }) }} />

                            {/*<TouchableOpacity onPress={() => { this.props.setSelectedComp(1, true) }} style={styles.loginButton}>*/}
                            {/*    <Text style={styles.loginButtonText}>Login</Text>*/}
                            {/*</TouchableOpacity>*/}
                            <TouchableOpacity onPress={this.sendLoginDetails} style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageWrapper: {
        flexDirection: "row",
        backgroundColor: "#011e36",
        height: "100%",
        padding: 10
    },
    mainLogoSection: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "60%",
        paddingTop: 10,
        paddingRight: 10
    },
    loginFuncSection: {
        backgroundColor: "#011e36",
        height: "100%",
        width: "40%",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center'
    },
    mainLogoImage: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
    sectionTopicView: {
        width: "75%",
        height: "10%"
    },
    sectionTopicText: {
        fontSize: 25,
        color: "white",
        paddingBottom: 10
    },
    sectionTopicUnderlineView: {
        backgroundColor: "#02e6c8",
        height: 2,
        width: "100%",
        marginLeft: -10
    },
    sectionFuncView: {
        width: "100%"
    },
    funcTopicText: {
        fontSize: 20,
        color: "white",
        paddingBottom: 5
    },
    funcInputTextInput: {
        borderRadius: 7,
        marginBottom: 20,
        backgroundColor: "white",
        width: "70%"
    },
    loginButton: {
        backgroundColor: "#02e6c8",
        height: 30,
        width: "50%",
        borderRadius: 7,
        alignItems: 'center'
    },
    loginButtonText: {
        fontSize: 20,
        color: "white"
    }
});