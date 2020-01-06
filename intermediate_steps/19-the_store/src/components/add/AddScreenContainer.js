import React from 'react';

// Components
import AddScreen from './AddScreen';
import Header from '../shared/Header';

export default class AddScreenContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => <Header showBack backLink={() => navigation.goBack()} />,
  });

  render() {
    return <AddScreen />;
  }
}
