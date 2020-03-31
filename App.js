import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenWithReducer from './src/screens/SquareScreenWithReducer';
import CounterScreenWithReducer from './src/screens/CounterScreenWithReducer';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List : ListScreen,
    Image : ImageScreen,
    Counter : CounterScreen,
    Color : ColorScreen,
    Square : SquareScreen,
    SquareWithReducer : SquareScreenWithReducer,
    CounterWithReducer : CounterScreenWithReducer,
    Text : TextScreen,
    Box : BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
