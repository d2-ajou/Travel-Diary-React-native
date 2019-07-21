import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Write_diary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Write-diary</Text>
        <Text>
          이 페이지는 다이어리 추가를 누르면 들어올 수 있는 페이지이다.
          이름이 애매한 페이지이다.
          사실 우리가 디자인한 그림에서는 다이어리 리스트에서 다이어리 추가가 가능하기에
          이 페이지는 없어도 될듯?
        </Text>
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