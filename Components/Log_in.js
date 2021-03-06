import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 10,
    paddingTop: 50
  },
  logo: {
    width: 300,
    height: 60,
    resizeMode: 'contain',
  },
  forgotPassword: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 10,
    height: 100,
    alignItems: 'flex-start',
  },
  signIn: {
    marginTop: 190,
    alignItems: 'center',
    height: 30,
  },
  createAccount: {
    alignItems:"center",
    height: 100,
  },
  normalContainer: {
    marginTop: 150,
    alignItems: 'center',
    height: 20,

  },
  normalText: {
    color: '#5B5A5A',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  createText: {
    color: '#FF7260',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  forgotText: {
    color: '#5B5A5A',
    fontSize: 12,
    alignItems: 'flex-end',
    textAlign: 'right',
    width: 330,
  },
  logoContiner: {
    height: 170,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize: 25,
    color: 'gray',
    letterSpacing: 6
  },
  textInput: {
    color: '#989899',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  button: {
    width: 325,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 3,
    marginTop: 40,
    backgroundColor: 'gray',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#129793',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  },
  emailContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 60,
    padding: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    backgroundColor: '#F5F6F7'
  },
  passwordContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 60,
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#F5F6F7'

  }

});

export default class Log_in extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>

          <Text style={styles.welcome}>Travel Diary</Text>

          <View style={{ height: 30 }} />

          <View style={styles.emailContainer}>
            <TextInput style={styles.textInput} placeholder="Email"
              keyboardType="email-address" />
          </View>
          <View style={styles.passwordContainer}>
            <TextInput style={styles.textInput} placeholder="Password"
              secureTextEntry={true} />
          </View>

          <TouchableOpacity>
            <View style={styles.forgotPassword}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.signIn}>
            <Button onPress={() => this.goDrawer()} title='SIGN IN' />
          </View>
        </TouchableOpacity>
        <View style={styles.normalContainer}>
          <Text style={styles.normalText}>Do not have account?</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.createAccount}>
            <Button onPress={() => this.goSign_up()} title='Create new Account' />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  goDrawer() {
    this.props.navigation.navigate('Drawer');
  }

  goSign_up() {
    this.props.navigation.navigate('Sign_up');
  }
}