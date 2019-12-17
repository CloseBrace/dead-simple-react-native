import React from 'react';
import { Text, View } from 'react-native';

import styles from './HeaderStyles';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>{'Dead Simple Podcasts'.toUpperCase()}</Text>
  </View>
);

export default Header;
