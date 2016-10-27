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


export default class AppContainer extends Component {
    constructor(props){
        super(props);
    }
	render() {
	   let self = this;
		 return (
              <View style={styles.container}>
              <Header/>
              <ChatList/>
              <Input/>
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

