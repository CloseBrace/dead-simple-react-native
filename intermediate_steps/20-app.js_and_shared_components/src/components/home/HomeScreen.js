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
import styles from './HomeScreenStyles';

// Images
const imgBkgFooter = require('../../../assets/images/footer_bkg.jpg');
const imgBkgMain = require('../../../assets/images/app_bkg.jpg');
const imgIconAdd = require('../../../assets/images/icon_add.png');
const imgIconRefresh = require('../../../assets/images/icon_refresh.png');
const imgIconSettings = require('../../../assets/images/icon_settings.png');

const renderPodcastInfo = (onPressListItem, screenProps) => {
  const { episodeList } = screenProps;
  return (
    <FlatList
      data={episodeList}
      keyExtractor={item => item.key}
      renderItem={({ item }) => {
        return (
          <TouchableHighlight
            onPress={() => onPressListItem(item)}
            underlayColor="rgba(255,255,255,0.2)"
          >
            <Text style={styles.item}>{item.title}</Text>
          </TouchableHighlight>
        );
      }}
      style={styles.flatList}
    />
  );
};

const HomeScreen = props => {
  const {
    onPressAddButton,
    onPressListItem,
    onPressSettingsButton,
    screenProps,
  } = props;
  const { podcastTitle } = screenProps;

  return (
    <ImageBackground source={imgBkgMain} style={styles.mainBackground}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Example Podcast</Text>
          <View style={styles.logoWrap}>
            <View style={styles.logoBox}>
              <Image
                source={{
                  uri:
                    'https://closebrace.com/images/home_logo_react_native.png',
                }}
                style={{ width: 198, height: 198 }}
              />
            </View>
          </View>
          {podcastTitle === '' ? (
            <Text style={styles.warning}>
              No Podcast Data Found! Please add one using the button below.
            </Text>
          ) : (
            renderPodcastInfo(onPressListItem, screenProps)
          )}
        </View>
        <ImageBackground source={imgBkgFooter} style={styles.footer}>
          <View style={styles.flexWrap}>
            <TouchableHighlight
              onPress={onPressAddButton}
              underlayColor="rgba(255,255,255,0.2)"
            >
              <Image source={imgIconAdd} style={{ width: 39, height: 39 }} />
            </TouchableHighlight>
            <Image source={imgIconRefresh} style={{ width: 50, height: 39 }} />
            <TouchableHighlight
              onPress={onPressSettingsButton}
              underlayColor="rgba(255,255,255,0.2)"
            >
              <Image
                source={imgIconSettings}
                style={{ width: 37, height: 39 }}
              />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
