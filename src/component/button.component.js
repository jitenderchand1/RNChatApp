import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,

} from 'react-native';

export default class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View>
                    <TouchableHighlight>
                        <View style={styles.button}>
                            <Text style={styles.buttonText} onPress={() => { this.props.buttonClick()}}>{this.props.buttonText}</Text>
                        </View>
                    </TouchableHighlight>


            </View>
        )
    }
}

var styles=StyleSheet.create({
    button: {
        backgroundColor: '#31374F',
        borderRadius: 4,
        padding:10
    },
    buttonText : {
        color : '#fff',
        textAlign:'center',
        fontWeight: 'bold'
    }
})