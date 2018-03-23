import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from '../Style';

export default class InputButton extends Component {

    render() {
        if (this.props.last) {
            return (
                <TouchableHighlight style={[Style.inputButton, this.props.last ? Style.slider : null]} underlayColor="#4083ef" onPress={ this.props.onPanel }>
                    <Text style={Style.inputButtonText}>{this.props.value}</Text>
                </TouchableHighlight>
            )
        }
        return (
            <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null, this.props.secondLast ? Style.symbols : null]} underlayColor="#74777a" onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}