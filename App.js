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
      marginTopAnim: new Animated.Value(0), // Initial value
      scaleAnim: new Animated.Value(1),
    }
  }

  componentDidMount(){
    Animated.timing(
      this.state.marginTopAnim,
      {
        duration: 400,
        toValue: 300,
        easing: Easing.bezier(1, 0, 0, 1)        
      }
    ).start();

    Animated.timing(
      this.state.scaleAnim,
      {
        duration: 400,
        toValue: 0.5,
        easing: Easing.linear,
        delay: 1000,
      }
    ).start();
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Animated.View 
          style = {{
            backgroundColor: 'aqua',
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: this.state.marginTopAnim,
            transform: [ {scale: this.state.scaleAnim } ]
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

