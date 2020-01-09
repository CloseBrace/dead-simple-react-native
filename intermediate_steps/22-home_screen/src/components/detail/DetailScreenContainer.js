import React from 'react';

// Components
import DetailScreen from './DetailScreen';
import Header from '../shared/Header';

export default class DetailScreenContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => <Header showBack backLink={() => navigation.goBack()} />,
  });

  render() {
    return <DetailScreen />;
  }
}
