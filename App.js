import {createStackNavigator, createAppContainer} from 'react-navigation';

import Log_in from './Components/Log_in';
import Diary_list from './Components/Diary_list';
import Sign_up from './Components/Sign_up';
import Nearby_attractions from './Components/Nearby_attractions'
import Path_search from './Components/Path_serach'
import Write_diary from './Components/Write_diary'
import Diary from './Components/Diary'
import Add_diary from './Components/Add_diary';
import MainScreen from './Components/MainScreen';
import Drawer from './Components/Drawer';

const AppStackNavigator = createStackNavigator({
  Main: {                     //이 이름으로 들어감
    screen: MainScreen,       //내가 보여줄 스크린 페이지
    navigationOptions: {
      header: null,
    }
  },

  Log_in: {
    screen: Log_in,
    navigationOptions: {
      header: null,
      title: 'Log_in'         //페이지 상단에 보이는 타이틀
    }
  },

  Drawer:{
    screen: Drawer,
    navigationOptions: {
      header: null,
    }
  },

  Diary_list: {
    screen: Diary_list,
    navigationOptions: {
      header: null,
    }
  },
  Sign_up: {
    screen: Sign_up,
    navigationOptions: {
      header: null,
    }
  },
  Nearby_attractions:{  
    screen: Nearby_attractions,     
    navigationOptions: {
      header: null,
    }
  },
  Path_search: {
    screen: Path_search,
    navigationOptions: {
      header: null,
    }
  },
  Write_diary: {
    screen: Write_diary,
    navigationOptions: {
      header: null,
    }
  },
  Diary: {
    screen: Diary,
    navigationOptions: {
      header: null,
    }
  },
  Add_diary:{
    screen: Add_diary,
    navigationOptions: {
      header: null,
    }
  }
});

export default createAppContainer(AppStackNavigator);