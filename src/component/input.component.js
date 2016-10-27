import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ListView
} from 'react-native';

import { connect } from 'react-redux';
import ButtonComponent from '../component/button.component'
import {setPropertyDetail} from '../actions/chat.action'
window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');
let url ='http://10.1.0.207:3000';

let socket = io(url, {jsonp:false});

class InputComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            message:''
        };
    }

    sendChatInformation(data){
        socket.emit('send message', data);
        this.setState({
            message:''
        });
        socket.on('new message', (msObj)=>{
           this.props.dispatch(setPropertyDetail(msObj));
            console.log("jjjjjjj",this.props );
        })
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
                    <ButtonComponent buttonText="SEND" buttonClick={self.sendChatInformation.bind(self, this.state.message) }/>
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
        textAlignVertical: 'top',
        flex:1,
        fontSize:14
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
        borderBottomRightRadius: 1,
        paddingLeft:10
      },
      button:{
        marginRight:10
      }

})

const mapStateToProps = function (state) {
    return state;
}
const InputComponentData = connect(mapStateToProps)(InputComponent);
export default InputComponentData;
