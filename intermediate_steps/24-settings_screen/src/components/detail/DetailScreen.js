import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './DetailScreenStyles';

// Images
const imgBkgFooter = require('../../../assets/images/footer_bkg.jpg');
const imgBkgMain = require('../../../assets/images/app_bkg.jpg');
const imgIconPlay = require('../../../assets/images/icon_play.png');
const imgIconPause = require('../../../assets/images/icon_pause.png');
const imgIconForward = require('../../../assets/images/icon_fastforward.png');
const imgIconRewind = require('../../../assets/images/icon_rewind.png');

export default class DetailScreen extends React.Component {
  renderPlayButton() {
    const { playSound } = this.props;
    return (
      <TouchableHighlight
        onPress={playSound}
        underlayColor="rgba(255,255,255,0.2)"
      >
        <Image source={imgIconPlay} style={{ width: 39, height: 39 }} />
      </TouchableHighlight>
    );
  }

  renderPauseButton() {
    const { pauseSound } = this.props;
    return (
      <TouchableHighlight
        onPress={pauseSound}
        underlayColor="rgba(255,255,255,0.2)"
      >
        <Image source={imgIconPause} style={{ width: 39, height: 39 }} />
      </TouchableHighlight>
    );
  }

  render() {
    const { isPlaying, item, jumpSound } = this.props;
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={imgBkgMain}
      >
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <Text style={styles.name}>{item.podcastTitle}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.pubDate}</Text>
            <Text style={styles.description}>{item.html}</Text>
          </ScrollView>
          <ImageBackground style={styles.footer} source={imgBkgFooter}>
            <View style={styles.flexWrap}>
              <TouchableHighlight
                onPress={() => {
                  jumpSound(-1);
                }}
                underlayColor="rgba(255,255,255,0.2)"
              >
                <Image
                  source={imgIconRewind}
                  style={{ width: 62, height: 39 }}
                />
              </TouchableHighlight>
              {isPlaying ? null : this.renderPlayButton()}
              {isPlaying ? this.renderPauseButton() : null}
              <TouchableHighlight
                onPress={() => {
                  jumpSound(1);
                }}
                underlayColor="rgba(255,255,255,0.2)"
              >
                <Image
                  source={imgIconForward}
                  style={{ width: 62, height: 39 }}
                />
              </TouchableHighlight>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    );
  }
}
