import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import RecognitionWelcomePageView from './RecognitionMode/RecognitionWelcomePageView';
import DisplayCameraStatusView from './RecognitionMode/DisplayCameraStatusView';
import AccessProcessingView from './RecognitionMode/AccessProcessingView';
import AccessGrantedView from './RecognitionMode/AccessGrantedView';

type MyProps = {
    setFaceRecognitionMode(isRecognitionModeActive: boolean): void
};
type MyState = {
    selectedRecognitionComp: number,
};

class FaceRecognitionModeView extends React.Component<MyProps, MyState> {
    state: MyState = {
        selectedRecognitionComp: 0,
    };

    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
                <View style={{ position: "absolute", zIndex: 2, right: 0, top: 0 }}>
                    <TouchableOpacity onPress={() => { this.props.setFaceRecognitionMode(false) }} style={{ width: 250, alignItems: 'center', height: 50, borderColor: "red", borderBottomWidth: 10, borderBottomLeftRadius: 30 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, color: "red", paddingBottom: 10, marginLeft: 5 }}>
                                Exit Recognition Mode
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        (this.state.selectedRecognitionComp == 0) ? <RecognitionWelcomePageView />
                            : (this.state.selectedRecognitionComp == 1) ? <DisplayCameraStatusView setSelectedRecognitionComp={(compNum: number) => { this.setState({ selectedRecognitionComp: compNum }) }} />
                                : (this.state.selectedRecognitionComp == 2) ? <AccessProcessingView setSelectedRecognitionComp={(compNum: number) => { this.setState({ selectedRecognitionComp: compNum }) }} />
                                    : (this.state.selectedRecognitionComp == 3) ? <AccessGrantedView setSelectedRecognitionComp={(compNum: number) => { this.setState({ selectedRecognitionComp: compNum }) }} />
                                        : null
                    }
                </View>
                <View style={{ position: "absolute", zIndex: 2, right: 0, bottom: 0 }}>
                    <TouchableOpacity onPress={() => { (this.state.selectedRecognitionComp == 4) ? this.setState({ selectedRecognitionComp: 0 }) : this.setState({ selectedRecognitionComp: this.state.selectedRecognitionComp + 1 }) }} style={{ width: 250, alignItems: 'center', height: 50, borderColor: "#011e36", borderTopWidth: 10, borderTopLeftRadius: 30 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, color: "#011e36", paddingBottom: 10, marginLeft: 5 }}>
                                Next
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default FaceRecognitionModeView;