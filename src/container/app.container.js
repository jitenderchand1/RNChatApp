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


class AppContainer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let self = this;
        return (
            <View style={styles.container}>
                <View style={{flex:9}}>
                    <Header/>
                    <ChatList/>
                </View>
                <View style={{flex:2}}>
                    <Input/>
                </View>
            </View>
        );
    }
}


export default connect()(AppContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF0F5'


    }
});

