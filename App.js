import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends Component {

  _onPressButton() {
    Alert.alert('Time and Date down');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Clocked In</Text>
        <View style={styles.b1}>
          <Button onPress={this._onPressButton} title="Press to Log Time" color={"white"}/>
        </View> 
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  b1: {
    height: 'auto',
    borderWidth: 'auto',
    backgroundColor: 'black',
    marginTop: 350,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
  },
});

