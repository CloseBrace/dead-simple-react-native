import React from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Components
import Header from '../shared/Header';
import styles from './AddScreenStyles';

// Images
const imgBkgMain = require('../../../assets/images/app_bkg.jpg');

const catchPress = () => {
  console.log('Press!');
};

const AddScreen = () => {
  return (
    <ImageBackground
      style={{ width: '100%', height: '100%' }}
      source={imgBkgMain}
    >
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Add New Podcast</Text>
        <Text style={styles.label}>RSS Feed URL</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.button} onPress={catchPress}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
        <Text style={styles.body}>
          <Text style={styles.bold}>Warning!</Text> This will delete all old
          podcast info and files. This app only tracks a single podcast series
          at a time.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default AddScreen;
