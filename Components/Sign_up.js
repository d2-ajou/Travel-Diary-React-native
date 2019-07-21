import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Sign_up extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign_up page</Text>
            <Button onPress={() => this.goLog_in()} title='가입완료' />
      </View>
    );
  }

  goLog_in() {
    this.props.navigation.navigate('Main');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});