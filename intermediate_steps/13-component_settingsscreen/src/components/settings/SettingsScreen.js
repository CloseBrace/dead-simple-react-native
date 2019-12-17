import React from 'react';
import { Switch, Text, View } from 'react-native';

// Components
import Header from '../shared/Header';
import styles from './SettingsScreenStyles';

const toggleRefresh = () => {
  console.log('Toggle!');
};

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.mainBackground}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.body}>
            <View style={styles.itemWrap}>
              <View style={styles.flexWrap}>
                <Text style={styles.settingText}>Auto-Check for Updates</Text>
                <Switch
                  onValueChange={toggleRefresh}
                  thumbColor="#000000"
                  trackColor="#EEEEEE"
                />
              </View>
              <Text style={styles.helpText}>
                Periodically checks for updates to your RSS feed (but never
                while you&#39;re playing one).
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
