import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');
let url ='http://10.1.21.115:3000';

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
		 return (
              <View style={styles.container}>
                  <TouchableHighlight onPress={()=> this.hell()}><Text>hellooooooo</Text></TouchableHighlight>

                  <Text style={styles.welcome}>
                  Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                  To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                  Double tap R on your keyboard to reload,{'\n'}
                  Shake or press menu button for dev menu
                </Text>

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

