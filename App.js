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
  Easing
} from 'react-native';


export default class App extends Component{
  
  constructor(props){
    super(props);

    anim = new Animated.Value(10),

    this.state = {
      animZoomFontSize: anim,
    }

    changeFontSize = anim.interpolate({
      inputRange:[10,30,50,70,100],
      outputRange:[30,20,40,50,40]
    })
  }

  _onPress(){
    Animated.timing(
      this.state.animZoomFontSize,
      {
        toValue: 100,
        duration: 4000
      }
    ).start();
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Animated.Text 
          style={{left:this.state.animZoomFontSize,color: this.state.animZoomFontSize.interpolate({
            inputRange:[10,50,100],
            outputRange:["gray","yellow","red"]          
          }),
          fontSize: changeFontSize
        }}>Barry Allen</Animated.Text>
        
        
        <View style={styles.containerBtn}>
            <TouchableOpacity onPress = {this._onPress.bind(this)}>
              <Text style={styles.btn}>Thay đổi kích thích chữ</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:300,
    backgroundColor: 'tomato'
  },
  containerBtn: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
    marginTop: 10,
  },
  btn: {
    color: 'white',
    padding: 10,
    backgroundColor: 'green'
  },
});
