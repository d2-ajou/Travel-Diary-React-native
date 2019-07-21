import React, { Component } from 'react';
import { StyleSheet, Button, View,Text } from 'react-native';

export default class Diary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Diary page</Text>
        <Text>
          하나의 다이어리를 보여주는 페이지이다.
          내가 여행을 하면서 썼던 일기들을 보여준다.
          일기 추가 또한 가능하다.
        </Text>
        <Button onPress={() => this.goAdd_diary()} title='일기작성' />
      </View>
    );
  }
  goAdd_diary() {
    this.props.navigation.navigate('Add_diary');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});