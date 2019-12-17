import React from 'react';
import { View } from 'react-native';

import SettingsScreen from './src/components/settings/SettingsScreen';
import Spinner from './src/components/shared/Spinner';
import styles from './AppStyles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Spinner show={false} text="Test Spinner" />
        <SettingsScreen />
      </View>
    );
  }
}
