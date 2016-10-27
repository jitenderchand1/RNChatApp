import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

import ButtonComponent from '../component/button.component'

export default class InputComponent extends Component{
    constructor(props){
        super(props)
    }
    sendDelayInformation(){

    }

    render(){
    let self = this;
            return (
                <View style={styles.container}>
                    <View style={styles.reasonDetailsContainer}>
                        <TextInput  multiline = {true}
                            style={styles.reasonDetails}
                            placeholder="Write your Message"
                            numberOfLines = {2}

                            />
                    </View>
                    <View style={styles.button}>
                    <ButtonComponent buttonText="SEND" buttonClick={self.sendDelayInformation.bind(self) }/>
                    </View>
                </View>
            )
       }
    }

var styles=StyleSheet.create({
    container : {
        flexDirection:'row',
        position:'absolute',
        bottom:10
    },
    reasonDetails: {
        backgroundColor: '#fff',
        paddingTop: 2,
        textAlignVertical: 'top'
      },
      reasonDetailsContainer: {
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        flex:1,
        marginLeft: 10,
        marginRight:10,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1
      },
      button:{
        marginRight:10
      }

})