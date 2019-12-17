import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backLink: {
    width: 30,
    height: 30,
  },
  backLinkWrap: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 30,
    height: 30,
  },
  header: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    height: 70,
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    width: '100%',
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 18 : 24,
    textAlign: 'center',
    color: '#fe91c2',
  },
});

export default styles;
