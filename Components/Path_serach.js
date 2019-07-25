import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';

export default class Path_search extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Path-Search</Text>
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