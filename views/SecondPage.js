import React from 'react';
import type { Node } from 'react';

import SideBar from '../components/SideBar';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';


const SecondPage: () => Node = () => {

    var pageData = {
        "name_of_user": "Dewmin Madiwila",
        "front_image": require('../assets/images/masked_face_side_view.jpg'),
        "side_image": require('../assets/images/masked_face_side_view.jpg')
    }

    return (
        <View style={{ flexDirection: "row", backgroundColor: "#011e36", height: "100%", padding: 10 }}>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "20%", borderColor: "#02e6c8", borderRightWidth: 5, paddingTop: 10, paddingRight: 10 }}>
                <SideBar name={pageData.name_of_user} />
            </View>
            <View style={{ backgroundColor: "#011e36", height: "100%", width: "80%", display: "flex", flexDirection: 'column', padding: 50 }}>
                <View style={{ paddingBottom: 50, paddingRight:40, width: "100%" }}>
                    <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
                        Display Camera Status
                    </Text>
                    <View style={{ backgroundColor: "#02e6c8", height: 2, width: "100%" }}></View>
                </View>
                <View style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{ fontSize: 20, color: "white", paddingBottom: 10, marginLeft: 5 }}>Side View</Text>
                        <View style={{ backgroundColor: "white", width: "90%", height: 250, borderRadius: 5 }}>
                            <Image source={pageData.side_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />
                        </View>
                        <View style={{ width: "90%", marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ width: "40%", height: 30, backgroundColor: "#5776f2", borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: "white", fontSize: 18 }} >Capture</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: "40%", height: 30, backgroundColor: "red", borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: "white", fontSize: 18 }} >Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: "50%" }}>
                        <Text style={{ fontSize: 20, color: "white", paddingBottom: 10, marginLeft: 5 }}>Front View</Text>
                        <View style={{ backgroundColor: "white", width: "90%", height: 250, borderRadius: 5 }}>
                            {/*<Image source={pageData.front_image} style={{ resizeMode: "contain", height: "100%", width: "100%" }} />*/}
                        </View>
                        <View style={{ width: "90%", marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ width: "40%", height: 30, backgroundColor: "#5776f2", borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: "white", fontSize: 18 }} >Capture</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: "40%", height: 30, backgroundColor: "red", borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: "white", fontSize: 18 }} >Clear</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={{ marginTop: 50, width: "100%", display: 'flex', flexDirection: 'row' }}>
                    <View style={{ width: "50%" }}>
                        <View style={{ paddingBottom: 50, paddingRight: 40, width: "100%" }}>
                            <Text style={{ fontSize: 25, color: "white", paddingBottom: 10 }}>
                                Capture Comparing
                            </Text>
                            <View style={{ backgroundColor: "#02e6c8", height: 2, width: "100%" }}></View>
                        </View>
                        <View style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ width: "90%", height: 40, backgroundColor: "#02e6c8", borderRadius: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: "white", fontSize: 18 }} >Compare With Database</Text>
                                <Image source={require('../assets/icons/sync_white_24dp.svg')} style={{ resizeMode: "contain", marginLeft: 5, width: 27, height: 27 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: "50%" }}>
                        <View style={{ paddingBottom: 50, paddingRight: 40, width: "100%" }}>
                            <Text style={{ fontSize: 25, color: "white", paddingBottom: 10 }}>
                                Output
                            </Text>
                            <View style={{ backgroundColor: "#02e6c8", height: 2, width: "100%" }}></View>
                        </View>
                        <View style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ color: "#34d27b", fontSize: 30, fontWeight: '500' }} >Access Granted</Text>
                            <Image source={require('../assets/icons/check-circle-solid.svg')} style={{ resizeMode: "contain", marginLeft: 5, marginTop: 5, width: 30, height: 30 }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

}

export default SecondPage;