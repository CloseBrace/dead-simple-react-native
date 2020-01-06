import React from 'react';
import { parseString } from 'react-native-xml2js';
import * as ImageManipulator from 'expo-image-manipulator';
import { Platform, View } from 'react-native';

import AppContainer from './src/components/navigation/Navigation';
import Spinner from './src/components/shared/Spinner';
import styles from './AppStyles';

export default class App extends React.Component {
  state = {
    autoRefresh: true,
    episodeList: [],
    feedUrl: '',
    isPopulating: false,
    lastRefresh: 0,
    podcastImage: '',
    podcastTitle: '',
    showSpinner: false,
    spinnerText: '',
  };

  appLoad = async () => {
    const feed = await this.getFeedFromUrl();
    const feedParsed = JSON.parse(feed);

    // Format the episode list
    const list = feedParsed.rss.channel[0].item;
    const listFormatted = list.map(item => {
      const description = item.description
        ? item.description[0]
        : 'No Description';

      // handle several options for podcast text
      let html = '';
      if (item['content:encoded']) {
        [html] = item['content:encoded'];
      } else if (item.description) {
        html = description;
      } else {
        html = 'No text available.';
      }

      return {
        description,
        html,
        key: item.guid[0]._,
        mp3: item.enclosure ? item.enclosure[0].$.url : item.link[0],
        podcastTitle: feedParsed.rss.channel[0].title[0],
        pubDate: item.pubDate[0],
        title: item.title[0],
      };
    });

    // Get it into the Store
    this.setState({
      episodeList: listFormatted,
    });

    console.log(this.state.episodeList.length);
  };

  componentDidMount() {
    // Gather podcast data from localstorage and populate state with it
    this.appLoad();
  }

  getFeedFromUrl = async () => {
    const feedResult = new Promise((resolve, reject) => {
      fetch('https://rss.simplecast.com/podcasts/1986/rss')
        .then(response => response.text())
        .then(response => {
          parseString(response, async (err, result) => {
            if (err) {
              reject(new Error(`Error saving data: ${err}`));
            }
            try {
              resolve(JSON.stringify(result));
            } catch (error) {
              reject(new Error(`Error saving data: ${error}`));
            }
          });
        })
        .catch(err => {
          reject(new Error(`Error fetching data: ${err}`));
        });
    });

    try {
      const result = await feedResult;
      return result;
    } catch (error) {
      console.log(error);
      return '';
    }
  };

  render() {
    const { episodeList } = this.state;
    return (
      <View style={styles.container}>
        <Spinner show={false} text="Test Spinner" />
        <AppContainer
          screenProps={{
            episodeList,
          }}
          style={styles.navigatorContainer}
        />
      </View>
    );
  }
}
