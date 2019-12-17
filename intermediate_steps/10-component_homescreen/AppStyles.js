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
});

export default styles;
