import React, { useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Components
import styles from './AddScreenStyles';

// Images
const imgBkgMain = require('../../../assets/images/app_bkg.jpg');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const AddScreen = props => {
  const { onButtonPress } = props;
  const [url, changeUrl] = useState('');

  return (
    <ImageBackground
      style={{ width: '100%', height: '100%' }}
      source={imgBkgMain}
    >
      <DismissKeyboard>
        <View style={styles.content}>
          <Text style={styles.title}>Add New Podcast</Text>
          <Text style={styles.label}>RSS Feed URL</Text>
          <TextInput
            onChangeText={newUrl => changeUrl(newUrl)}
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={url}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => onButtonPress(url)}
          >
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
          <Text style={styles.body}>
            <Text style={styles.bold}>Warning!</Text> This will delete all old
            podcast info and files. This app only tracks a single podcast series
            at a time.
          </Text>
        </View>
      </DismissKeyboard>
    </ImageBackground>
  );
};

export default AddScreen;
