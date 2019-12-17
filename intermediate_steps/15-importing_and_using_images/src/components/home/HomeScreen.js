import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// Components
import Header from '../shared/Header';
import styles from './HomeScreenStyles';

// Images
const imgBkgFooter = require('../../../assets/images/footer_bkg.jpg');
const imgBkgMain = require('../../../assets/images/app_bkg.jpg');
const imgIconAdd = require('../../../assets/images/icon_add.png');
const imgIconRefresh = require('../../../assets/images/icon_refresh.png');
const imgIconSettings = require('../../../assets/images/icon_settings.png');

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
  <ImageBackground source={imgBkgMain} style={styles.mainBackground}>
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
          <Image source={imgIconAdd} style={{ width: 39, height: 39 }} />
          <Image source={imgIconRefresh} style={{ width: 50, height: 39 }} />
          <Image source={imgIconSettings} style={{ width: 37, height: 39 }} />
        </View>
      </View>
    </View>
  </ImageBackground>
);

export default HomeScreen;
