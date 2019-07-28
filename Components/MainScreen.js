import React, { Component } from 'react';
import { View, Text, Button,  ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'

import Log_in from './Log_in';

export default class MainScreen extends Component {

  constructor(props){
    super(props);
    this.state = { data: []}
  }

  componentDidMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyA6DpApFBONse4LUDAkN77NjX1xFdnq0vw",
      authDomain: "react-demo-a8982.firebaseapp.com",
      databaseURL: "https://react-demo-a8982.firebaseio.com",
      projectId: "react-demo-a8982",
      storageBucket: "react-demo-a8982.appspot.com",
      messagingSenderId: "298804918733",
      appId: "1:298804918733:web:f703c2be61b31eea"
    });

    const ref = firebase.database().ref();

    ref.on("value", snapshot => {
      this.setState({data: snapshot.val()});
    });
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Diary_list' : 'MainScreen')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.data.map(value => {
            return(
              <View>
                <Text>{value.NAME}</Text>
                <Text>Loading</Text>
              </View>
            );
          })
        }
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});