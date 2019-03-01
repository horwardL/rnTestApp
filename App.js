/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {uri: 'https://cdn.betterttv.net/frankerfacez_emote/231552/1'};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{'Welcome to  '}
          <Blink style={styles.blink} te='AHAHA!'/>
          <BlinkImg imgSource = {require('./img/pepega.png')}/>
        </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 100);
  }
  render() {
    if (!this.state.isShowingText) {
      return <Text>{'               '}</Text>;
    }

    return (
      <Text style={styles.blink}>{this.props.te}</Text>
    );
  }
}

class BlinkImg extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingImgage: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingImgage: !previousState.isShowingImgage }
      ))
    ), 100);
  }
  render() {
    if (!this.state.isShowingImgage) {
      return <Image style={styles.blinkImg} source = {require('./img/1.png')}/>;
    }

    return (
      <Image style={styles.blinkImg} source = {this.props.imgSource}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  blink: {
    backgroundColor: '#FFFF00',
    color: '#FF0000',
  },
  blinkImg:{
    width: 16,
    height: 16,
  },
});
