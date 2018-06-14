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
  PanResponder
} from 'react-native';


export default class App extends Component{
  
  constructor(props){
    super(props);

    _panResponder = {};

    this.state = {
      pan: new Animated.ValueXY(0),
    }
  }

  componentWillMount(){
    _panResponder = PanResponder.create({
      onStartShouldSetPanResponder:()=>true,
      onMoveShouldSetPanResponder:()=>true,
      onPanResponderGrant:this._onPanResponderGrant.bind(this),
      onPanResponderMove: this._onPanResponderMove.bind(this),
      onPanResponderRelease: this._onPanResponderRelease(this)
    })
  }

  _onPanResponderGrant(event,gestureState){
    this.state.pan.setOffset({x:event.nativeEvent.x,y:gestureState.dy})
  }
  
  _onPanResponderMove(event,gestureState){
    this.state.pan.setValue({x:gestureState.dx, y: gestureState.dy})
  }

  _onPanResponderRelease(event,gestureState){

  }
  
  render() {

    let { pan } = this.state;
    let [ translateX, translateY ] = [ pan.x, pan.y ];
    let myTransForm = {transform:[{translateX},{translateY}]}

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.circle,myTransForm]}
          {..._panResponder.panHandlers}
        >

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'aqua'
  },
});
