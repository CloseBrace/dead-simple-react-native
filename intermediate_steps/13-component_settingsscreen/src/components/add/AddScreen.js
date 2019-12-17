import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

// Components
import Header from '../shared/Header';
import styles from './AddScreenStyles';

const catchPress = () => {
  console.log('Press!');
};

const AddScreen = () => {
  return (
    <View style={styles.mainBackground}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Add New Podcast</Text>
        <Text style={styles.label}>RSS Feed URL</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
        />
        <Button title="Add" onPress={catchPress} />
        <Text style={styles.body}>
          <Text style={styles.bold}>Warning!</Text> This will delete all old
          podcast info and files. This app only tracks a single podcast series
          at a time.
        </Text>
      </View>
    </View>
  );
};

export default AddScreen;
