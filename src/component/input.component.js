import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ListView
} from 'react-native';

import ButtonComponent from '../component/button.component'

window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');
let url ='http://10.1.21.115:3000';

export default class InputComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            message:''
        };
        this.socket = io(url, {jsonp:false});
    }

    sendDelayInformation(data){
        this.socket.emit('send message', data);
        this.setState({
            message:''
        });
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
                                    onChangeText={(message) => this.setState({ message }) }
                                    value={this.state.message}
                          />
                    </View>
                    <View style={styles.button}>
                    <ButtonComponent buttonText="SEND" buttonClick={self.sendDelayInformation.bind(self, this.state.message) }/>
                    </View>
                </View>
            )
          }

}

var styles=StyleSheet.create({
    container : {
        flexDirection:'row'
    },
    reasonDetails: {
        backgroundColor: '#fff',
        paddingTop: 2,
        textAlignVertical: 'top'
      },
      reasonDetailsContainer: {
        borderWidth: 1,
        borderColor: '#dddddd',
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
