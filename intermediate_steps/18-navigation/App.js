import React from 'react';
import * as ImageManipulator from 'expo-image-manipulator';
import { Platform, View } from 'react-native';

import AppContainer from './src/components/navigation/Navigation';
import Spinner from './src/components/shared/Spinner';
import styles from './AppStyles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Spinner show={false} text="Test Spinner" />
        <AppContainer style={styles.navigatorContainer} />
      </View>
    );
  }
}
