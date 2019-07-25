import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import Diary_list from './Diary_list';
import Nearby_attractions from './Nearby_attractions';
import Path_search from './Path_serach';


class HamburgerIcon extends Component {

    toggleDrawer = () => {

        console.log(this.props.navigationProps);

        this.props.navigationProps.toggleDrawer();

    }

    render() {

        return (

            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

                    <Image
                        source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />

                </TouchableOpacity>

            </View>

        );


    }
}

class MainActivity extends Component {

    constructor(props) {

        super(props);

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);

    }

    render() {
        return (

            <View style={styles.MainContainer}>

                <Text style={{ fontSize: 23 }}> This is Activity - 1 </Text>

            </View>
        );
    }
}

class SecondActivity extends Component {

    constructor(props) {

        super(props);

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);

    }

    render() {
        return (

            <View style={styles.MainContainer}>

                <Text style={{ fontSize: 23 }}> This is Activity - 2 </Text>

            </View>
        );
    }
}

class ThirdActivity extends Component {

    constructor(props) {

        super(props);

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);

    }

    render() {
        return (

            <View style={styles.MainContainer}>

                <Text style={{ fontSize: 23 }}> This is Activity - 3 </Text>

            </View>
        );
    }
}

const FirstActivity_StackNavigator = createStackNavigator({
    First: {
        screen: Diary_list,
        navigationOptions: ({ navigation }) => ({
            title: 'Diary_list',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,

            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});


const SecondActivity_StackNavigator = createStackNavigator({
    Second: {
        screen: Nearby_attractions,
        navigationOptions: ({ navigation }) => ({
            title: 'Nearby_attractions',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,

            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});


const ThirdActivity_StackNavigator = createStackNavigator({
    Third: {
        screen: Path_search,
        navigationOptions: ({ navigation }) => ({
            title: 'Path_search',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,

            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});

export default MyDrawerNavigator = createDrawerNavigator({
    Diary_list: {
        screen: FirstActivity_StackNavigator
    },

    Nearby_attractions: {
        screen: SecondActivity_StackNavigator
    },

    Path_search: {
        screen: ThirdActivity_StackNavigator
    }
});


const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }

});