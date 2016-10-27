import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import io from 'socket.io-client/socket.io';
import socket from './userAgent';


export default class AppContainer extends Component {
   constructor(props){
    super(props)

   }
    componentDidMount () {


      }

	render() {
		 return (
              <View style={styles.container}>
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

