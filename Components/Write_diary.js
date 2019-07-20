import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

export default class Write_diary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Write-diary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});