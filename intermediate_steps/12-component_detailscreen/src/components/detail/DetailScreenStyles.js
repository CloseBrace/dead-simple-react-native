import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    backgroundColor: 'transparent',
    padding: 30,
  },
  date: {
    color: '#AAAAAA',
    fontSize: 22,
    marginBottom: 30,
  },
  description: {
    color: '#666666',
    fontSize: 24,
  },
  flexWrap: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    height: 120,
    width: '100%',
  },
  name: {
    color: '#666666',
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 26,
  },
});

export default styles;
