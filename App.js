import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './Components/MainScreen';
import Log_in from './Components/Log_in';
import Diary_list from './Components/Diary_list';
import Sign_up from './Components/Sign_up';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: Log_in,
    navigationOptions: {
      title: 'App.js의 Main title입니다~',
    }
  },
  Log_in: {
    screen: Log_in,
    navigationOptions: {
      title: 'Log_in',
    }
  },
  Diary_list: {
    screen: Diary_list,
    navigationOptions: {
      title: 'Diary_list'
    }
  },
  Sign_up: {
    screen: Sign_up,
    navigationOptions: {
      title: 'Sign_up'
    }
  }
});

export default createAppContainer(AppStackNavigator);