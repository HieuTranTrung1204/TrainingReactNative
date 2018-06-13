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
    
    animOpacity = new Animated.Value(0);
    animDeg = new Animated.Value(0);
    deg = animDeg.interpolate({
      inputRange: [0,1],
      outputRange: ["0deg","720deg"]
    })

    this.state = {
      
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={{opacity:animOpacity}}>Hello World !</Animated.Text>
        <Animated.Text style={{transform:[{rotate:deg}]}}>Kim So Huyn</Animated.Text>
        <Image style={{height:150,width:300}} source={{uri:"https://vtv1.mediacdn.vn/thumb_w/650/2017/kim-so-hyun-11-1500285334980.jpg"}} />
      </View>
    );
  }

  componentDidMount(){
    Animated.sequence([
      Animated.timing(
        animOpacity,
        {
          toValue: 1,
          duration: 3000
        }
      ),

      Animated.timing(
        animDeg,
        {
          toValue: 1,
          duration: 3000
        }
      )

    ]).start();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
