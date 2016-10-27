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


export default class AppContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        socket.emit('disconnect');
    }

	render() {
		 return (
              <View style={styles.container}>
              <Header/>
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
    backgroundColor: '#F5FCFF'

  }
});

