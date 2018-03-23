import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from '../Style';


export default class Display extends Component {

    render() {
        return (
            <View style={Style.displayContainer}>
                <TouchableHighlight style={Style.icon} onPress={this.props.onPress} >
                    <Image source={require('../Images/Backspace.png')}/>
                </TouchableHighlight>
                <Text style={Style.displayText}>{this.props.sum}</Text>
                <Text style={Style.displayText}>{this.props.ans}</Text>
            </View>
        )
    }
}