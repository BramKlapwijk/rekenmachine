import React from 'react';
import Style from './Style';
import {Text, View, Alert, TouchableHighlight, Image, AppRegistry} from 'react-native';
import InputButton from './Components/InputButton';
import Display from './Components/Display';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [7, 8, 9, '-', ''],
    [4, 5, 6, '*', ''],
    [1, 2, 3, '/', '<'],
    ['.', 0, '=', '+', '']
];

// Define the input buttons that will be displayed in the calculator.
const specialButtons = [
    ['M+', 'MR', 'MC'],
    ['CE', '√', 'x²']
];

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sum: '',
            ans: '',
            memory: '',
            inputValue: '',
            selectedSymbol: null,
            panel: false
        }
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <Display sum={this.state.sum} ans={this.state.ans} onPress={() => this.reset()}/>
                <View style={Style.inputContainer}>
                    {this.renderInputButtons()}
                </View>
                <TouchableHighlight onPress={() => this.panel(false)} style={[Style.closer, this.state.panel ? Style.panelShown : Style.panelHide]}>
                    <Text>.</Text>
                </TouchableHighlight>
                <View id={'panel'} style={[Style.sliderMenu, this.state.panel ? Style.panelShown : Style.panelHide]}>
                    <TouchableHighlight onPress={() => this.panel(false)}>
                        <Image source={require('./Images/Arrow.png')}/>
                    </TouchableHighlight>
                    <View style={Style.specialContainer}>
                        {this.renderSpecialButtons()}
                    </View>
                </View>
            </View>
        );
    }

    reset() {
        this.setState({
            sum: this.state.sum.substring(0, (this.state.sum.length - 1))
        })
    }

    onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this.handleNumberInput(input)
            case 'string':
                return this.handleStringInput(input)
        }
    }

    handleNumberInput(num) {
        let inputValue = num;
        let currentSum = this.state.sum.toString();
        // alert(currentSum.toString(), inputValue.toString());
        if (currentSum.contains('=')) {
            this.setState({
                sum: inputValue.toString()
            });
        } else {
            this.setState({
                inputValue: inputValue.toString(),
                sum: currentSum + inputValue.toString()
            });
        }
    }

    handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '.':
            case '-':
                if (this.state.sum.contains('=')) {
                    this.setState({
                        sum: this.state.inputValue + str,
                        selectedSymbol: str
                    });
                } else {
                    this.setState({
                        sum: this.state.sum + str,
                        selectedSymbol: str
                    });
                }
                break;
            case '=':
                let symbol = this.state.selectedSymbol;

                if (!symbol) {
                    return;
                }

                this.setState({
                    sum: this.state.sum + '=',
                    ans: eval(this.state.sum),
                    inputValue: eval(this.state.sum),
                    selectedSymbol: null
                });
                break;
        }
    }

    panel(bool) {
        this.setState({
            panel: bool
        })
    }

    renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i++) {
                let input = row[i];
                inputRow.push(
                    <InputButton value={input} secondLast={i === (row.length - 2)} last={i === (row.length - 1)} highlight={this.state.selectedSymbol === input} onPanel={() => this.panel(true)} onPress={() => this.onInputButtonPressed(input)} key={r + "-" + i}/>
                );
            }

            views.push(<View style={[Style.inputRow]} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    renderSpecialButtons() {
        let views = [];

        for (var r = 0; r < specialButtons.length; r++) {
            let row = specialButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i++) {
                let input = row[i];
                inputRow.push(
                    <TouchableHighlight onPress={() => this.specialButton(input)} key={"special-" + i} style={Style.specialKey}>
                        <Text style={Style.specialKeyText} key={"specialText-" + i}>{input}</Text>
                    </TouchableHighlight>
                );
            }

            views.push(<View style={Style.specialRow} key={"specialRow-" + r}>{inputRow}</View>)
        }

        return views;
    }

    specialButton(str) {
        switch (str) {
            case 'M+':
                this.setState({
                    memory: eval(this.state.memory + '+' + this.state.inputValue)
                });
                break;
            case 'MR':
                this.setState({
                    inputValue: this.state.memory,
                    sum: this.state.sum + this.state.memory
                });
                break;
            case 'MC':
                this.setState({
                    memory: ''
                });
                break;
            case 'CE':
                this.setState({
                    ans: '',
                    sum: ''
                });
                break;
            case '√':
                this.setState({
                    ans: Math.sqrt(this.state.sum),
                    inputValue: Math.sqrt(this.state.sum),
                    sum: '√' + this.state.sum + '='
                });
                break;
            case 'x²':
                this.setState({
                    ans: Math.pow(this.state.sum, 2),
                    inputValue: Math.pow(this.state.sum, 2),
                    sum: this.state.sum + '²='
                });
                break;
        }
    }
}
