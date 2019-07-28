import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';


ImagePicker.showImagePicker((response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    const source = { uri: response.uri };

    // You can also display the image using data:
    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      avatarSource: source,
    });
  }
})


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
        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
      </View>
    );
  }

}

ImagePicker.launchCamera((response) => {
});

ImagePicker.launchImageLibrary((response) => {
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });