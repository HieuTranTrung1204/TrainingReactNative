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
  View
} from 'react-native';

var FloatingLabel = require('react-native-floating-labels');

// import { Sae } from 'react-native-textinput-effects';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Fumi } from 'react-native-textinput-effects';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
 
            style={styles.formInput}
          >First Name</FloatingLabel>
        <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            underlineColorAndroid={'#2AB57B'}
          >Last Name</FloatingLabel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  labelInput: {
    color: '#2AB57B',
  },
  formInput: {    
    //borderBottomWidth: 1.5, 
    marginLeft: 20,
    borderColor: '#333',       
  },
  input: {
    borderWidth: 0
  }
});
