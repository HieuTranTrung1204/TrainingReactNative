/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View, 
  Text,
  Dimensions
} from 'react-native';

var {height,width} = Dimensions.get('window');

export default class App extends Component{
  
  
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainerOrder}>
      <Text style={styles.btnOrder}>Order now</Text>
        </TouchableOpacity>        
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btn}>Join now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  btnContainer:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#00AF66',
    height:60,
    width:120,
    borderRadius: 40,
    position:'absolute',
    bottom:15,
    right:15
  },
  btn:{
    color:'white',
    fontSize:20
  },

  btnContainerOrder:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#02864B',
    height:35,
    width:100,
    borderRadius: 40,
    position:'absolute',
    bottom:15,
    left:15
  },

  btnOrder:{
    color:'white',
    fontSize:16
  },
});
