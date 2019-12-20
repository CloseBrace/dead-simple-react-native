import React from 'react';

import Header from '../shared/Header';
import HomeScreen from './HomeScreen';

export default class HomeScreenContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => <Header showBack={false} backLink={() => null} />,
  });

  // Catch add button press
  onPressAddButton = () => {
    const { navigation } = this.props;
    navigation.navigate('Add');
  };

  // Catch list item press
  onPressListItem = item => {
    const { navigation } = this.props;
    navigation.navigate('Detail', { item });
  };

  // Catch settings button press
  onPressSettingsButton = () => {
    const { navigation } = this.props;
    navigation.navigate('Settings');
  };

  render() {
    return (
      <HomeScreen
        onPressAddButton={this.onPressAddButton}
        onPressListItem={this.onPressListItem}
        onPressSettingsButton={this.onPressSettingsButton}
      />
    );
  }
}
