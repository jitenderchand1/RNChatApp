import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../component/header.component'
import Input from '../component/input.component'
import ChatList from '../component/listView.component'


window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');

let url ='http://10.1.21.178:3000';

export default class AppContainer extends Component {
   constructor(props){
    super(props)
       this.state={
           hell:''
       };
       this.socket = io(url, {jsonp:false});
   }
    componentDidMount () {
        this.socket.on('new message', function(msgObj){
            this.setState({
                hell:msgObj
            });
        });

      }

    async hell(){
        console.log("in hell...")
        this.socket.emit('send message', 'first')
    }

	render() {
	   let self = this;
		 return (
              <View style={styles.container}>
              <Header {...self.props}/>
              <ChatList {...self.props}/>
              <Input {...self.props}/>
              </View>
            );
	}
}

const mapStateToProps = function (state) {
	return state;
}
const App = connect(mapStateToProps)(AppContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF0F5'

  }
});

