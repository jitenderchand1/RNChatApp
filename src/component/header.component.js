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
                    <Text style={styles.logoText}>RN</Text>
                </View>
            </View>
        )
      }
}


var styles = StyleSheet.create({
  header:{
    height:45,
    backgroundColor:'#31374F',
    marginTop:23,
    justifyContent:'center'
  },
  logo:{
    borderRadius:17.5,
    height:35,
    width:35,
    borderColor:'#fff',
    borderWidth:1,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  logoText:{
    textAlign:'center',
    color:'#fff',
    width:20

  }

})


