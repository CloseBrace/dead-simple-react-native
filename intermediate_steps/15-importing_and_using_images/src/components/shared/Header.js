import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import styles from './HeaderStyles';

// Images
const headerImage = require('../../../assets/images/header_bkg.jpg');
const backImage = require('../../../assets/images/icon_back.png');

const Header = () => (
  <ImageBackground style={styles.header} source={headerImage}>
    <Text style={styles.text}>{'Dead Simple Podcasts'.toUpperCase()}</Text>
    <Image source={backImage} style={styles.backLink} />
  </ImageBackground>
);

export default Header;
