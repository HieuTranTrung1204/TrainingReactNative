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
  Animated,
  TouchableOpacity
} from 'react-native';


export default class App extends Component{
  
  constructor(props) {
    super(props);
    
    animValue = new Animated.Value(0); // Initial

    let animValueListenerId = animValue.addListener((value)=> alert(value));

    animValue.removeListener(animValueListenerId);

    this.state = {
      changeFontSize: animValue,
    };
  }

  _onPress(){
    Animated.timing(
      this.state.changeFontSize,
      {
        toValue: 25,
        duration: 400
      }
    ).start();
  }

  _stopAnim(){
    animValue.stopAnimation((value)=>alert(value));
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={{fontSize:this.state.changeFontSize}}>Barry Allen</Animated.Text>
        <View style={styles.containerBtn}>
            <TouchableOpacity onPress = {this._onPress.bind(this)}>
              <Text style={styles.btn}>create Animation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {this._stopAnim.bind(this)}>
              <Text style={styles.btnStop}>stop Animation</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    color: 'white',
    padding: 10,
    backgroundColor: 'green'
  },
  btnStop: {
    color: 'white',
    padding: 10,
    backgroundColor: 'tomato'
  },
});
