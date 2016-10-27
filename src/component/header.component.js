import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


export default class HeaderComponent extends Component{
      constructor(props){
        super(props)
      }

      render(){
        return (
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Text>RN</Text>
                </View>
            </View>

        )
      }
}


var styles = StyleSheet.create({
  header:{
    height:40,
    backgroundColor:'#31374F',
    marginTop:23,
    justifyContent:'center'
  },
  logo:{
    borderRadius:15,
    height:30,
    width:30,
    borderColor:'#fff',
    borderWidth:1,
    alignSelf:''
  }

})


