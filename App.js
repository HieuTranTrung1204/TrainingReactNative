/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry,
  Animated,
  Easing,
  Image
} from 'react-native';


export default class App extends Component{
  
  constructor(props){
    super(props);

    animValue = new Animated.Value(0.5);

    this.state = {
      scaleImage: animValue
    }
  }

  _onPress(){
    Animated.spring(
      this.state.scaleImage,
      {
        toValue: 1, // kích thước thực của tấm hình mà mình định width vs height ở dưới
      }
    ).start();
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Animated.Image style={{width:300,height:300,transform:[{scale:this.state.scaleImage}]}} source={{uri:"https://kenh14cdn.com/2018/3/2/kimsohyun7-1520008092022883109225.jpg"}} />
        <View style={styles.containerBtn}>
            <TouchableOpacity onPress = {this._onPress.bind(this)}>
              <Text style={styles.btn}>press Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  containerBtn: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    color: 'white',
    padding: 10,
    backgroundColor: 'green'
  },
});
