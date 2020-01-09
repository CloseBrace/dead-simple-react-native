import React from 'react';
import { Image, ImageBackground, Text, TouchableHighlight } from 'react-native';

import styles from './HeaderStyles';

// Images
const headerImage = require('../../../assets/images/header_bkg.jpg');
const backImage = require('../../../assets/images/icon_back.png');

const Header = props => {
  const { backLink, showBack } = props;
  return (
    <ImageBackground style={styles.header} source={headerImage}>
      <Text style={styles.text}>{'Dead Simple Podcasts'.toUpperCase()}</Text>
      {showBack ? (
        <TouchableHighlight
          onPress={backLink}
          underlayColor="rgba(255,255,255,0.2)"
          style={styles.backLinkWrap}
        >
          <Image source={backImage} style={styles.backLink} />
        </TouchableHighlight>
      ) : null}
    </ImageBackground>
  );
};

export default Header;
