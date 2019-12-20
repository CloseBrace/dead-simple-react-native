import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AddScreenContainer from '../add/AddScreenContainer';
import DetailScreenContainer from '../detail/DetailScreenContainer';
import HomeScreenContainer from '../home/HomeScreenContainer';
import SettingsScreen from '../settings/SettingsScreen';

const AppNavigator = createStackNavigator(
  {
    Add: AddScreenContainer,
    Detail: DetailScreenContainer,
    Home: HomeScreenContainer,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerMode: 'screen',
      headerStyle: {
        backgroundColor: '#6c106e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    cardStyle: { backgroundColor: '#861488' },
  },
);

export default createAppContainer(AppNavigator);
