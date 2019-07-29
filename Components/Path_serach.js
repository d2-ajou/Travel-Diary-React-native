import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class Path_search extends Component {
  state = {
    active: "home"
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});