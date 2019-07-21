import {createStackNavigator, createAppContainer} from 'react-navigation';
import Log_in from './Components/Log_in';
import Diary_list from './Components/Diary_list';
import Sign_up from './Components/Sign_up';
import Nearby_attractions from './Components/Nearby_attractions'
import Path_search from './Components/Path_serach'
import Write_diary from './Components/Write_diary'
import Diary from './Components/Diary'
import Add_diary from './Components/Add_diary';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: Log_in,
    navigationOptions: {
      title: 'TraveLog'
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
  },
  Nearby_attractions:{  //이 이름으로 들어감
    screen: Nearby_attractions,     //내가 보여줄 스크린 페이지
    navigationOptions:{
      title: 'Nearby_attractions'   //상단에 이 타이틀이 표시됨
    }
  },
  Path_search: {
    screen: Path_search,
    navigationOptions: {
      title: 'Path_search'
    }
  },
  Write_diary: {
    screen: Write_diary,
    navigationOptions: {
      title: 'Write_diary'
    }
  },
  Diary: {
    screen: Diary,
    navigationOptions: {
      title: 'Diary'
    }
  },
  Add_diary:{
    screen: Add_diary,
    navigationOptions: {
      title: 'Add_diary'
    }
  }
});

export default createAppContainer(AppStackNavigator);