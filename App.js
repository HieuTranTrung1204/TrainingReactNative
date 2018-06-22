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
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';

export default class App extends Component{
  
  constructor(props){
    super(props);

    arr = ['Home','Cards','Order','History','Inbox','Stores','Gift','Music'];

    setting = require('./img/setting.png');
    baseline = require('./img/baseline.png');

  }

  _renderItem(){
    views = [];
    let dem = 0;
    for(let item of arr){
      views.push(
        <TouchableOpacity key={item} style={{ padding: 15 }}>
          <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>{item}</Text>
        </TouchableOpacity>
      )
    }  
    return views;
  }

  _renderNavigationView(){
    return(
      <ScrollView>
        <View style={styles.headerDrawer}>
          <Text style={{color:'white',fontSize:18,marginLeft:10}}>dfndfndfndf</Text>
        </View>
        <View style={styles.bodyDrawer}>
          {this._renderItem()}
          <View style={{height:2,borderColor:'gray',borderWidth:1}} />
          <TouchableOpacity>
            <Image resizeMode='contain' source={setting} style={{height:30,width:30,backgroundColor:'#2D2926',marginLeft:20,marginTop:10}} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
       <DrawerLayout
        drawerBackgroundColor={'white'}
        drawerWidth={300}
        renderNavigationView={this._renderNavigationView.bind(this)}
        ref={drawer => {
          return (this.drawer = drawer);
        }}
       >
          <TouchableOpacity onPress={() => this.drawer.openDrawer()}>
            <Image resizeMode='contain' source={baseline} style={{height:30,width:30,marginLeft:10,marginTop:10}} />
          </TouchableOpacity>
       </DrawerLayout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F5FCFF',
  },
  headerDrawer: {
    height:200,
    backgroundColor: 'aqua',
  },
  bodyDrawer: {
    height:500,
    backgroundColor: '#2D2926',
  },
});
