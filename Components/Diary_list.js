import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, YellowBox} from 'react-native';

export default class Diary_list extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Diary-list page</Text>
        <Text>
          여기서 여러개의 다이어리를 리스트로 볼 수 있다.
          인스타 마냥 스크롤을 할 것이다.
          최근에 쓴 다이어리가 가장 위로 갈 것이다.
          일지 추가 버튼을 누르면 일지 추가 페이지로 간다.
        </Text>
        <Button onPress={() => this.goDiary()} title='다이어리1' />
      </View>
    );
  }

  goDiary() {
    this.props.navigation.navigate('Diary');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});