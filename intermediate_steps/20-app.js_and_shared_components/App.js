import React from 'react';
import { parseString } from 'react-native-xml2js';
import * as ImageManipulator from 'expo-image-manipulator';
import { Alert, AsyncStorage, Platform, View } from 'react-native';

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

  appLoad = async () => {};

  componentDidMount() {
    // Gather podcast data from localstorage and populate state with it
    this.appLoad();
  }

  checkForRefresh = async () => {
    const { autoRefresh, lastRefresh } = this.state;

    // If autoRefresh is turned off, don't waste your time!
    if (!autoRefresh) {
      return false;
    }

    // Only bother if it's been more than two hours
    const now = Date.now();
    if (!lastRefresh || now - lastRefresh > 7200000) {
      return true;
    }
    return false;
  };

  formatFeedData = async feed => {
    // Once the feed is acquired, massage the data
    const feedParsed = JSON.parse(feed);
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

    // Big images slow Android down,
    const initialImage = feedParsed.rss.channel[0].image[0].url[0];
    let formattedImage = {};
    if (Platform.OS !== 'ios') {
      try {
        formattedImage = await ImageManipulator.manipulateAsync(initialImage, [
          { resize: { width: 400, height: 400 } },
        ]);
      } catch (error) {
        this.showError(new Error(error));
        formattedImage = { uri: '' };
      }
    } else {
      formattedImage = { uri: initialImage };
    }

    // Return a data object with which to populate state
    return {
      episodeList: listFormatted,
      isPopulating: false,
      podcastImage: formattedImage.uri,
      podcastTitle: feedParsed.rss.channel[0].title[0],
      showSpinner: false,
      spinnerText: '',
    };
  };

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

  hideSpinner = () => {
    this.setState({ showSpinner: false, spinnerText: '' });
  };

  populateAppFromLocal = async () => {
    this.showSpinner('Loading Initial Data');
    try {
      // First try to get state data from local storage
      const localStateData = await AsyncStorage.getItem(
        '@DeadSimplePodcasts:appState',
      );
      const localState = JSON.parse(localStateData);
      if (!localState) {
        // Nothing could be gotten from local state.
        this.hideSpinner();
        return false;
      }
      // Populate app state with the data from local state
      this.setState({ ...localState });
      this.hideSpinner();
      return true;
    } catch (error) {
      this.showError(new Error(error));
      this.hideSpinner();
      return false;
    }
  };

  populateAppFromUrl = async () => {
    const { isPopulating } = this.state;
    // If the feed's currently populating, don't run this again
    if (isPopulating) {
      return false;
    }

    this.showSpinner('Loading Podcast List');
    this.setState({ isPopulating: true });

    // Get the feed
    const feed = await this.getFeedFromUrl();
    if (feed === '') {
      this.hideSpinner();
      this.setState({ isPopulating: false });
      return false;
    }

    // Get formatted data
    const formattedData = await this.formatFeedData(feed);

    // Set state, including updated last refresh value
    const now = Date.now();
    await this.setState({ ...formattedData, lastRefresh: now });

    // Save the state to disk
    await this.saveStateToLocal();

    this.hideSpinner();
    this.setState({ isPopulating: false });

    return true;
  };

  saveStateToLocal = async () => {
    const stateJSON = JSON.stringify(this.state);
    try {
      await AsyncStorage.setItem('@DeadSimplePodcasts:appState', stateJSON);
      return true;
    } catch (error) {
      this.showError(new Error(error));
      return false;
    }
  };

  showError = error => {
    const errorText = error && error.message ? error.message : 'Unknown Error';
    Alert.alert('Error', errorText, [{ text: 'OK' }]);
    this.hideSpinner();
  };

  showSpinner = spinnerText => {
    this.setState({ showSpinner: true, spinnerText });
  };

  render() {
    const { episodeList, podcastTitle, showSpinner, spinnerText } = this.state;
    return (
      <View style={styles.container}>
        <Spinner show={showSpinner} text={spinnerText} />
        <AppContainer
          screenProps={{
            episodeList,
            podcastTitle,
          }}
          style={styles.navigatorContainer}
        />
      </View>
    );
  }
}
