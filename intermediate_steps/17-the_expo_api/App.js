import React from 'react';
import * as ImageManipulator from 'expo-image-manipulator';
import { Image, Platform, View } from 'react-native';

import SettingsScreen from './src/components/settings/SettingsScreen';
import Spinner from './src/components/shared/Spinner';
import styles from './AppStyles';

export default class App extends React.Component {
  state = {
    image: {},
  };

  componentDidMount() {
    this.formatImage();
  }

  formatImage = async () => {
    // Make sure the image isn't gigantic!
    const initialImage =
      'http://res.cloudinary.com/closebrace/image/upload/v1535384758/dogs.jpg';
    let formattedImage = { uri: initialImage };

    // Big images slow Android down,
    if (Platform.OS !== 'ios') {
      const manipResult = await ImageManipulator.manipulateAsync(initialImage, [
        { resize: { width: 350, height: 350 } },
      ]);
      formattedImage = manipResult;
    }

    this.setState({ image: formattedImage });
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <Spinner show={false} text="Test Spinner" />
        <Image source={image} style={{ width: 350, height: 350 }} />
      </View>
    );
  }
}
