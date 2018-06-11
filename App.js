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
    this.state = {
      animZoomFontSize: new Animated.Value(10),
    }
  }

  _onPress(){
    Animated.timing(
      this.state.animZoomFontSize,
      {
        toValue: 30,
        duration: 400
      }
    ).start();
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Animated.Text style={{fontSize: this.state.animZoomFontSize}}>Ðu?ng L?p Tùng</Animated.Text>
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
