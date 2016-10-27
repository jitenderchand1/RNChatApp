import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import io from 'socket.io-client/socket.io';
import socket from '../userAgent';
import Header from '../component/header.component'


export default class AppContainer extends Component {
   constructor(props){
    super(props)

   }
    componentDidMount () {


      }

	render() {
		 return (
              <View style={styles.container}>
                    <Header/>
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
    backgroundColor: '#F5FCFF'

  }
});

