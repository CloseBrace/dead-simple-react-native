import React from 'react';

// Components
import AddScreen from './AddScreen';
import Header from '../shared/Header';

export default class AddScreenContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => <Header showBack backLink={() => navigation.goBack()} />,
  });

  onButtonPress = url => {
    const {
      navigation,
      screenProps: { saveFeedUrl, showError },
    } = this.props;

    let finalUrl = url;

    // Don't do anything if there's no url input
    if (!finalUrl) {
      return null;
    }

    // add 'http://' if necessary
    if (finalUrl.substr(0, 4).toLowerCase() !== 'http') {
      finalUrl = `http://${finalUrl}`;
    }

    try {
      // Save the feed Url (state and local storage)
      saveFeedUrl(finalUrl);
    } catch (error) {
      return showError(new Error('Feed could not be added. Please try again.'));
    }

    // Return to the home screen once the Feed's added
    return navigation.goBack();
  };

  render() {
    return <AddScreen onButtonPress={this.onButtonPress} />;
  }
}
