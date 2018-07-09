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

import { Dropdown } from 'react-native-material-dropdown';

export default class App extends Component{
  
  constructor(props){
    super(props);

  }

  _onChangText(data){
    alert(data);
  }
  
  render() {
    let data = [
      {
      value: 'January',
      }, 
      {
        value: 'February',
      }, 
      {
        value: 'March',
      },
      {
        value: 'April',
      },
      {
        value: 'May',
      },
      {
        value: 'June',
      },
      {
        value: 'July',
      },
      {
        value: 'August',
      },
      {
        value: 'September',
      },
      {
        value: 'October',
      },
      {
        value: 'November',
      },
      {
        value: 'December',
      },
    ];

    return (
      <View style={styles.container}>
        <Dropdown
          label='Month'
          data={data}
          containerStyle={{width:200,marginLeft: 10,}}
          onChangeText={this._onChangText.bind(this)}
          //dropdownMargins={{ min: 8, max: 16 }}
          //shadeOpacity={0.25}
        />
        <Dropdown
          label='Day'
          data={data}
          containerStyle={{width:100,marginLeft: 10,}}
          onChangeText={this._onChangText.bind(this)}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
});
