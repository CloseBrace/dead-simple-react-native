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
    color: '#fecbde',
    fontSize: 22,
    marginBottom: 30,
  },
  description: {
    color: '#fecbde',
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
    elevation: 30,
    height: 120,
    width: '100%',
  },
  name: {
    color: '#fec7b1',
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 26,
  },
});

export default styles;
