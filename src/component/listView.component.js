import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ScrollView
} from 'react-native';


export default class ChatListComponent extends Component{
    constructor(props){
        super(props)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let list =[
            "asfdasfd","asfasfdsafafd",'asdfasdfa'
        ]
            this.state = {
              chats: ds.cloneWithRows(list)
            }
    }

    renderList(data){
     return (
        <View style={styles.bottom}>
        <View style={styles.chatBox}>
            <Text>{data}</Text>
        </View>
        </View>
     )

    }

    render(){
            return(
            <ScrollView style={styles.scroll}>

                    <ListView
                            enableEmptySections={true}
                            dataSource={this.state.chats}
                            renderRow={(data,sec,key) => {
                            return this.renderList(data);
                            } } />

                </ScrollView>
            )
        }
    }


var styles=StyleSheet.create({
    scroll:{
    flex:1,
    height:500
    },
    child:{
        justifyContent:'flex-end',
        flex:1
    },

    chatBox: {
        backgroundColor:'#fff',
        width:300,
        padding:10,
        margin:5,
        alignSelf:'flex-end',
        borderRadius:6,
        borderColor:'#EFF0F5',
        borderWidth:1
    }
})