import React from 'react';
import { ImageBackground, Switch, Text, View } from 'react-native';

// Components
import Header from '../shared/Header';
import styles from './SettingsScreenStyles';

// Images
const imgBkgMain = require('../../../assets/images/app_bkg.jpg');

const toggleRefresh = () => {
  console.log('Toggle!');
};

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.mainBackground} source={imgBkgMain}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.body}>
            <View style={styles.itemWrap}>
              <View style={styles.flexWrap}>
                <Text style={styles.settingText}>Auto-Check for Updates</Text>
                <Switch
                  onValueChange={toggleRefresh}
                  thumbColor="#fec7b1"
                  trackColor={{ false: '#977883', true: '#eeabc3' }}
                />
              </View>
              <Text style={styles.helpText}>
                Periodically checks for updates to your RSS feed (but never
                while you&#39;re playing one).
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
