import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Vibration
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

// export default class App extends Component {

//   // onSuccess(e) {    
//   //   Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//   //   return;
//   // }

//   // render() {
//   //   return (
//   //     <QRCodeScanner
//   //       onRead={this.onSuccess.bind(this)}
//   //       topContent={
//   //         <Text style={styles.centerText}>
//   //           Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
//   //         </Text>
//   //       }
//   //       bottomContent={
//   //         <TouchableOpacity style={styles.buttonTouchable}>
//   //           <Text style={styles.buttonText}>OK. Got it!</Text>
//   //         </TouchableOpacity>
//   //       }
//   //     />
//   //   );
//   // }

// }

// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
// });


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scanning: true,
      cameraType: RNCamera.Constants.Type.back,
      qrcode: ''
    }
  }

  _handleBarCodeRead(e) {
    Vibration.vibrate();
    // this.setState({ scanning: false });
    // Linking.openURL(e.data).catch(err => console.error('An error occured', err));
    this.setState({qrcode: e.data})
    return;
  }

  render() {
    if (this.state.scanning) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Barcode Scanner
        </Text>
          <View style={styles.rectangleContainer}>
            <RNCamera style={styles.camera} type={this.state.cameraType} onBarCodeRead={this._handleBarCodeRead.bind(this)}>
              <View style={styles.rectangleContainer}>
                <View style={styles.rectangle} />
                <Text style={{
                  backgroundColor: 'white'
                }}>{this.state.qrcode}</Text>
              </View>
            </RNCamera>
          </View>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
          </Text>
        </View>
      );
    }
    else {
      return (<View style={styles.container}>
        <Text style={styles.welcome}>
          Barcode Scanner
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
        </Text>
      </View>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
});