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
  FlatList,
  LayoutAnimation,
  UIManager
} from 'react-native';


export default class App extends Component{
  
  constructor(props){
    super(props);

    if(Platform.OS === "android"){
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    arrayData = ["Đường Lập Tùng","Barry Allen","Kim So Huyn"]

    this.state = {
     arr: arrayData,
    }
  }

  _addData(){
    let name = "Nguyễn Văn C";

    myCustomAnim = {
      duration: 2000,
      create: {
        type: LayoutAnimation.Types.spring, // linear
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
      },
    }

    LayoutAnimation.configureNext(myCustomAnim)
    this.setState({arr: [...this.state.arr,name]})
  }

  render() {

    return (
      <View style={styles.container}>
        <Text onPress={this._addData.bind(this)}>Add data</Text>
        <FlatList 
          data={this.state.arr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item})=><View style={{margin:5,padding:10,backgroundColor:'aqua'}}>
                                      <Text style={{color:'black'}}>{item}</Text>
                                </View>}
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
