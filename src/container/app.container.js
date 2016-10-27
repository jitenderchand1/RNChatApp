import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ListView
} from 'react-native';
import { connect } from 'react-redux';

window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');
let url ='http://10.1.21.115:3000';

export default class AppContainer extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let data = ds.cloneWithRows([]);
        this.state={
            data:data
        };
        this.socket = io(url, {jsonp:false});
    }
    componentDidMount () {

    }

    async hell(data){
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        console.log("in hell...");
        this.socket.emit('send message', data);
        this.socket.on('new message', (msObj)=>{
            let data=[];
            data.push(msObj);
            let allData = ds.cloneWithRows(data || []);
            this.setState({
                data:allData
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={{flex: .8}}>
                        <ListView
                            dataSource={this.state.data} enableEmptySections={true}
                            renderRow={(rowData) => (
                                 <View style={styles.item}>
                                  <View style={styles.row}>
                                   <Text>{rowData}</Text>
                                    </View>
                                     </View>
                                     ) } />
                    </View>
                    <View style={{flex: .2}}>
                        <TextInput
                            style={styles.textEdit}
                            onChangeText={(moreText) => this.setState({moreText})}
                        />
                        <TouchableHighlight onPress={()=> this.hell(this.state.)}><Text>Done</Text></TouchableHighlight>
                    </View>
                </View>
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
    textEdit: {
       width:100,
        height:100
    }
});

