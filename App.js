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
        <Button onPress={this._onPressButton} title="Press Me" color={"black"}/>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
  },
});

