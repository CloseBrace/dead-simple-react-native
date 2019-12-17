import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// Components
import Header from '../shared/Header';
import styles from './HomeScreenStyles';

// Temp Data
const episodeList = [
  { key: 'ep7', title: 'Episode 7 - Tiger Tango' },
  { key: 'ep6', title: 'Episode 6 - Bison Battle' },
  { key: 'ep5', title: 'Episode 5 - Wombat Combat' },
  { key: 'ep4', title: 'Episode 4 - Kangaroo Court' },
  { key: 'ep3', title: 'Episode 3 - Awesome Oppossum' },
  { key: 'ep2', title: 'Episode 2 - Wallaby Wonders' },
  { key: 'ep1', title: 'Episode 1 - Camp Koala' },
];

const catchPress = () => {
  console.log('Press!');
};

const renderPodcastInfo = () => (
  <FlatList
    data={episodeList}
    keyExtractor={item => item.key}
    renderItem={({ item }) => {
      return (
        <TouchableHighlight
          onPress={catchPress}
          underlayColor="rgba(255,255,255,0.2)"
        >
          <Text style={styles.item}>{item.title}</Text>
        </TouchableHighlight>
      );
    }}
    style={styles.flatList}
  />
);

const HomeScreen = () => (
  <View style={styles.mainBackground}>
    <Header />
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Example Podcast</Text>
        <View style={styles.logoWrap}>
          <View style={styles.logoBox}>
            <Image
              source={{
                uri: 'https://closebrace.com/images/home_logo_react_native.png',
              }}
              style={{ width: 198, height: 198 }}
            />
          </View>
        </View>
        {renderPodcastInfo()}
      </View>
      <View style={styles.footer}>
        <View style={styles.flexWrap}>
          <Button title="Add" onPress={catchPress} />
          <Button title="Refresh" onPress={catchPress} />
          <Button title="Settings" onPress={catchPress} />
        </View>
      </View>
    </View>
  </View>
);

export default HomeScreen;
