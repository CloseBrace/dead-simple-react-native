import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './HeaderStyles';

// Images
const headerImage = require('../../../assets/images/header_bkg.jpg');
const backImage = require('../../../assets/images/icon_back.png');

const catchPress = () => {
  console.log('Back Button!');
};

const showBack = true;

const Header = () => (
  <ImageBackground style={styles.header} source={headerImage}>
    <Text style={styles.text}>{'Dead Simple Podcasts'.toUpperCase()}</Text>
    {showBack ? (
      <TouchableHighlight
        onPress={catchPress}
        underlayColor="rgba(255,255,255,0.2)"
        style={styles.backLinkWrap}
      >
        <Image source={backImage} style={styles.backLink} />
      </TouchableHighlight>
    ) : null}
  </ImageBackground>
);

export default Header;
