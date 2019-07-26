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
                        source={require('../Icon/menu_icon.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />

                </TouchableOpacity>

            </View>

        );


    }
}

//합치고 싶을 경우에는 이 메인 액티비티에다가 Diary_list내용 집어넣으면 됨!
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

const Diary_list_StackNavigator = createStackNavigator({
    First: {
        screen: Diary_list,
        navigationOptions: ({ navigation }) => ({
            title: 'Diary_list',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,
        })
    },
});


const Nearby_attractions_StackNavigator = createStackNavigator({
    Second: {
        screen: Nearby_attractions,
        navigationOptions: ({ navigation }) => ({
            title: '주변 관광 명소',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,
        })
    },
});


const Path_search_StackNavigator = createStackNavigator({
    Third: {
        screen: Path_search,
        navigationOptions: ({ navigation }) => ({
            title: '길 찾기',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,
        })
    },
});

export default MyDrawerNavigator = createDrawerNavigator({
    //헤더 설정해서 나중에 여기다가 계정이나 그런거 표시해도 좋을듯.
    Diary_list: {   //메뉴에 나타나는 이름
        screen: Diary_list_StackNavigator
    },

    "주변 관광 명소": { 
        screen: Nearby_attractions_StackNavigator
    },

    "길찾기": {
        screen: Path_search_StackNavigator
    }
});


const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }

});