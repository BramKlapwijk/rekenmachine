import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    icon: {
        zIndex: 2000,
        position: 'absolute',
        top: '82%',
        left: '88%'
    },

    displayContainer: {
        marginTop: '5%',
        paddingBottom: '5%',
        flex: 2,
        backgroundColor: '#f2f2f2'
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#3f4148'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#3f4148'
    },

    symbols: {
        borderWidth: 1,
        borderColor: '#74777a',
        backgroundColor: '#74777a',
    },

    backBlue: {
        backgroundColor: '#4083ef',
    },

    backGrey: {
        backgroundColor: '#74777a',
    },

    sliderMenu: {
        top: '24.5%',
        left: '25%',
        width: '75%',
        height: '76%',
        backgroundColor: '#4083ef',
        position: 'absolute'
    },

    slider: {
        borderWidth: 1,
        flex: 0.2,
        borderColor: '#4083ef',
        backgroundColor: '#4083ef',
    },

    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },

    displayText: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right'
    },

    panelHide: {
        display: 'none'
    },

    displayShown: {
        display: 'flex'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    specialContainer: {
        flex: 8
    },

    closer: {
        zIndex: 2000,
        backgroundColor: 'rgba(50, 50, 50, 0.5)',
        top: '24.5%',
        left: '0%',
        width: '25%',
        height: '76%',
        position: 'absolute'
    },

    specialRow: {
        flex: 1,
        flexDirection: 'row'
    },

    specialKeyText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },

    specialKey: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#4083ef'
    }
});

export default Style;