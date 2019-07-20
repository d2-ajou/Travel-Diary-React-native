import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import Login from './Login';

// const AppTabNavigator = createMaterialTopTabNavigator({
//   Log_in: {screen : Login}
// },{
//   animationEnabled: true,
//   swipeEnabled: true,
//   tabBarPosition: "bottom",
//   tabBarOptions: {
//       style: {
//           ...Platform.select({
//               android:{
//                   backgroundColor: 'white',
//               }
//           })
//       },
//       iconStyle: {height: 100},
//       activeTintColor: '#000',
//       inactiveTintColor: '#d1cece',
//       upperCaseLabel: false,
//       showLabel: false,
//       showIcon: true,
//   }
// });

// const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  render() {
    return <Login/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});