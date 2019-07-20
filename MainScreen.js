import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

import Log_in from './Component/Log_in';

export default class MainScreen extends Component {
  render() {
    return (
      <Log_in/>
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