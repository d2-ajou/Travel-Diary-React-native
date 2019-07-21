import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Add_diary extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Add_diary page</Text>
        <Text>
            하나의 일지를 추가한다.
            하나의 일지는 여러가지의 일기를 포함하고 있는 리스트이다.
            일기에 사진을 넣거나 글을 작성하는 곳이 바로 여기~
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