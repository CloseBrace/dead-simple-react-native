import React from 'react';
import { Audio } from 'expo-av';

// Components
import DetailScreen from './DetailScreen';
import Header from '../shared/Header';

export default class DetailScreenContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => <Header showBack backLink={() => navigation.goBack()} />,
  });

  state = {
    isPaused: false,
    isPlaying: false,
    mp3: '',
    soundObject: {},
  };

  componentDidMount() {
    this.populateMp3();
  }

  componentWillUnmount() {
    const { soundObject } = this.state;
    if (soundObject.stopAsync) {
      soundObject.stopAsync();
    }
  }

  jumpSound = async direction => {
    const { isPlaying, soundObject } = this.state;
    const {
      screenProps: { showError },
    } = this.props;
    if (soundObject && isPlaying) {
      try {
        const status = await soundObject.getStatusAsync();
        const { playableDurationMillis, positionMillis, rate } = status;
        if (direction === 1) {
          // Fast forward 10 seconds
          const newPos = positionMillis + 10000 * rate;
          const finalPos =
            newPos < playableDurationMillis ? newPos : playableDurationMillis;
          soundObject.setPositionAsync(finalPos);
        }
        if (direction === -1) {
          // Rewind 10 seconds
          const newPos = positionMillis - 10000 * rate;
          const finalPos = newPos > 0 ? newPos : 0;
          soundObject.setPositionAsync(finalPos);
        }
      } catch (error) {
        return showError(new Error(error));
      }
    }
    return soundObject;
  };

  pauseSound = async () => {
    const {
      screenProps: { showError },
    } = this.props;
    const { soundObject } = this.state;
    if (soundObject) {
      try {
        this.setState({
          isPaused: true,
          isPlaying: false,
        });
        await soundObject.pauseAsync();
      } catch (error) {
        showError(new Error(error));
      }
    }
  };

  playSound = async () => {
    const {
      screenProps: { hideSpinner, showError, showSpinner },
    } = this.props;

    const { isPaused, isPlaying, mp3, soundObject } = this.state;

    if (!isPlaying && !isPaused) {
      this.setState({ isPlaying: true });
      try {
        showSpinner('Fetching MP3');
        const { sound } = await Audio.Sound.createAsync(
          { uri: mp3 },
          { shouldPlay: true },
        );
        if (sound) {
          hideSpinner();
        }
        await sound.playAsync();
        // Your sound is playing!
        this.setState({ soundObject: sound });
      } catch (error) {
        // An error occurred!
        hideSpinner();
        showError(new Error(error));
        this.setState({
          isPlaying: false,
          soundObject: {},
        });
      }
    }
    if (!isPlaying && isPaused) {
      this.setState({
        isPaused: false,
        isPlaying: true,
      });
      await soundObject.playAsync();
    }
  };

  async populateMp3() {
    const {
      navigation: {
        state: {
          params: { item },
        },
      },
    } = this.props;
    this.setState({ mp3: item.mp3 });
  }

  render() {
    const { isPlaying } = this.state;
    const {
      navigation: {
        state: {
          params: { item },
        },
      },
    } = this.props;
    const strippedHTML = item.html.replace(/<[^>]+>/g, '');
    item.html = strippedHTML;

    return (
      <DetailScreen
        isPlaying={isPlaying}
        item={item}
        jumpSound={this.jumpSound}
        pauseSound={this.pauseSound}
        playSound={this.playSound}
      />
    );
  }
}
