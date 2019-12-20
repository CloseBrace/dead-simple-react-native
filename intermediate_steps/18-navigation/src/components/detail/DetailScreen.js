import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';

import styles from './DetailScreenStyles';

// Images
const imgBkgFooter = require('../../../assets/images/footer_bkg.jpg');
const imgBkgMain = require('../../../assets/images/app_bkg.jpg');
const imgIconPlay = require('../../../assets/images/icon_play.png');
const imgIconPause = require('../../../assets/images/icon_pause.png');
const imgIconForward = require('../../../assets/images/icon_fastforward.png');
const imgIconRewind = require('../../../assets/images/icon_rewind.png');

const catchPress = () => {
  console.log('Press!');
};

export default class DetailScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={imgBkgMain}
      >
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <Text style={styles.name}>Podcast Title</Text>
            <Text style={styles.title}>Episode Title</Text>
            <Text style={styles.date}>August 15, 2018</Text>
            <Text style={styles.description}>
              Zombies reversus ab inferno, nam malum cerebro. De carne animata
              corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi
              undead dictum mauris. Hi mortuis soulless creaturas, imo monstra
              adventus vultus comedat cerebella viventium. Qui offenderit rapto,
              terribilem incessu. The voodoo sacerdos suscitat mortuos comedere
              carnem. Search for solum oculi eorum defunctis cerebro. Nescio an
              Undead zombies. Sicut malus movie horror.{'\n'}
              {'\n'}
              Cum horribilem resurgere de sepulcris creaturis, sicut de iride et
              serpens. Pestilentia, ipsa screams. Pestilentia est haec ambulabat
              mortuos. Sicut malus voodoo. Aenean a dolor vulnerum aperire
              accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia
              sint terribiles legionis. Alii missing oculis aliorum sicut
              serpere crabs nostram. Putridi odores aere implent.
            </Text>
          </ScrollView>
          <ImageBackground style={styles.footer} source={imgBkgFooter}>
            <View style={styles.flexWrap}>
              <Image source={imgIconRewind} style={{ width: 62, height: 39 }} />
              <Image source={imgIconPlay} style={{ width: 39, height: 39 }} />
              <Image
                source={imgIconForward}
                style={{ width: 62, height: 39 }}
              />
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    );
  }
}
