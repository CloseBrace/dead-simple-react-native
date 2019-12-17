import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    fontSize: 22,
    lineHeight: 30,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 44 : 24,
  },
  header: {
    backgroundColor: '#EEEEEE',
    height: 70,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 24 : 26,
    textAlign: 'center',
    color: '#666666',
  },
});

export default styles;
