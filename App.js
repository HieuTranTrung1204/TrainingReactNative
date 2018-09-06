import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ImageBackground resizeMode="stretch" source={require('./images/design.png')} style={{ flex: 1, backgroundColor: '#E4FFFF', width: null, height: null, flexDirection: 'column', justifyContent: 'space-around' }}>
        <View>
          <Image resizeMode="contain" source={require('./images/logoCopy.png')} style={{ alignSelf: 'center' }} />
        </View>
        <View>
          <Image resizeMode="contain" source={require('./images/zoomoovTimeApp.png')} style={{ alignSelf: 'center' }} />
        </View>
        <ImageBackground resizeMode="contain"
          source={require('./images/reference.png')}
          style={{ alignSelf: 'center', marginTop: 24, width: 663, height: 471, justifyContent: 'space-around', flexDirection: 'column' }}>

          <View style={{ flexDirection: 'column', marginTop: 70 }}>
            <ImageBackground resizeMode="contain" source={require('./images/bgCopy.png')} style={{ width: 370, height: 73, alignSelf: 'center', flexDirection: 'row' }}>
              <Image resizeMode="contain" source={require('./images/selectACountry.png')} style={{ alignSelf: 'center', marginLeft: 42 }} />
              <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 14, marginLeft: 20 }} onPress={() => console.log('pressed')}>
                <Image resizeMode="contain" source={require('./images/playIcon.png')} />
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground resizeMode="contain" source={require('./images/bgCopy.png')} style={{ width: 370, height: 73, alignSelf: 'center', marginVertical: 8, flexDirection: 'row' }}>
              <Image resizeMode="contain" source={require('./images/selectAnOutlet.png')} style={{ alignSelf: 'center', marginLeft: 42 }} />
              <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 14, marginLeft: 27 }} onPress={() => console.log('pressed')}>
                <Image resizeMode="contain" source={require('./images/playIcon.png')} />
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground resizeMode="contain" source={require('./images/bg.png')} style={{ width: 370, height: 73, alignSelf: 'center', flexDirection: 'row'  }}>
              <Image resizeMode="contain" source={require('./images/staffAuthCOde.png')} style={{ alignSelf: 'center', marginLeft: 42 }} />
            </ImageBackground>
          </View>

          <Image resizeMode="contain" source={require('./images/invalideCode.png')} style={{ alignSelf: 'center' }} />
          <Image resizeMode="contain" source={require('./images/next.png')} style={{ alignSelf: 'center', marginBottom: 55 }} />
        </ImageBackground>
      </ImageBackground>
    );
  }
}
