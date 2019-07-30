/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MapView from 'react-native-maps';

const Path_search = () => {
  return (
    <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 37.566636,
         longitude: 126.978330,
         latitudeDelta: 0.015,
         longitudeDelta: 0.015,
       }}
     >
     </MapView>
   </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Path_search;
