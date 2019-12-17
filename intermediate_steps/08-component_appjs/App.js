import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './AppStyles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>
            {'Dead Simple Podcasts'.toUpperCase()}
          </Text>
        </View>
        <ScrollView>
          <Text style={styles.body}>
            Zombies reversus ab inferno, nam malum cerebro. De carne animata
            corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi
            undead dictum mauris. Hi mortuis soulless creaturas, imo monstra
            adventus vultus comedat cerebella viventium. Qui offenderit rapto,
            terribilem incessu. The voodoo sacerdos suscitat mortuos comedere
            carnem. Search for solum oculi eorum defunctis cerebro. Nescio an
            Undead zombies. Sicut malus movie horror.
          </Text>
          <Text style={styles.body}>
            Cum horribilem resurgere de sepulcris creaturis, sicut de iride et
            serpens. Pestilentia, ipsa screams. Pestilentia est haec ambulabat
            mortuos. Sicut malus voodoo. Aenean a dolor vulnerum aperire
            accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia
            sint terribiles legionis. Alii missing oculis aliorum sicut serpere
            crabs nostram. Putridi odores aere implent.
          </Text>
          <Text style={styles.body}>
            Tremor est vivos magna. Expansis ulnis video missing carnem armis
            caeruleum in locis. A morbo amarus in auras. Nihil horum sagittis
            tincidunt, gelida portenta. The unleashed virus est, et iam mortui
            ambulabunt super terram. Souless mortuum oculos attonitos back
            zombies. An hoc incipere Clairvius Narcisse, an ante? Is bello mundi
            z?
          </Text>
        </ScrollView>
      </View>
    );
  }
}