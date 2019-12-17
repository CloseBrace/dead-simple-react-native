import React from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';

import styles from './SpinnerStyles.js';

const Spinner = props => {
  const { text, show } = props;

  if (!show) {
    return null;
  }

  return (
    <View style={styles.blackout}>
      <Text style={styles.header}>{text}</Text>
      <ActivityIndicator size={Platform.OS === 'ios' ? 1 : 100} color="#FFF" />
    </View>
  );
};

export default Spinner;
