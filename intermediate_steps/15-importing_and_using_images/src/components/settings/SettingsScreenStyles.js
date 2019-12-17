import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    marginBottom: 40,
    height: 150,
  },
  content: {
    backgroundColor: 'transparent',
    padding: 30,
  },
  flexWrap: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  helpText: {
    fontSize: 20,
    color: '#666666',
  },
  itemWrap: {
    height: 40,
    marginBottom: 20,
    width: '100%',
  },
  mainBackground: {
    width: '100%',
    height: '100%',
  },
  settingText: {
    color: '#000000',
    fontSize: 22,
    paddingRight: 20,
  },
  title: {
    color: '#444444',
    fontSize: 30,
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default styles;
