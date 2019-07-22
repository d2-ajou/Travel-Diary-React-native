import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

import Log_in from './Log_in';

export default class MainScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.textBig}>
          TraveLog
        </Text>
        <Button onPress={() => this.goLog_in()} title='로그인' />
      </View>
    );
  }

  goLog_in() {
    this.props.navigation.navigate('Log_in');
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBig: {
    fontSize: 32,
  },
});