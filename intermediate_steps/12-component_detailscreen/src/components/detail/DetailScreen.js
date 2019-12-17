import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

import Header from '../shared/Header';
import styles from './DetailScreenStyles';

const catchPress = () => {
  console.log('Press!');
};

export default class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Header />
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
          <View style={styles.footer}>
            <View style={styles.flexWrap}>
              <Button title="Back 10s" onPress={catchPress} />
              <Button title="Play" onPress={catchPress} />
              <Button title="Fwd 10s" onPress={catchPress} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
