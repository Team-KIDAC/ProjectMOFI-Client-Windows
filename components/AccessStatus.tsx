import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

type MyProps = {
    status: number
};
type MyState = {

};

class AccessStatus extends React.Component<MyProps, MyState> {
    render() {
        if (this.props.status == 1) {
            return (
                <View style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ color: "#34d27b", fontSize: 30, fontWeight: '500' }} >Access Granted</Text>
                    <Image source={require('../assets/icons/check-circle-solid.svg')} style={{ resizeMode: "contain", marginLeft: 5, marginTop: 5, width: 30, height: 30 }} />
                </View>
            );
        } else {
            return (
                <View style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ color: "#a44322", fontSize: 30, fontWeight: '500' }} >Access Denied</Text>
                    <Image source={require('../assets/icons/times-circle-solid.svg')} style={{ resizeMode: "contain", marginLeft: 5, marginTop: 7, width: 30, height: 30 }} />
                </View>
            );
        }
    }
}

export default AccessStatus;