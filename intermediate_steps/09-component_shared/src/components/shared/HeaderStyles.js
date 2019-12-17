import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
