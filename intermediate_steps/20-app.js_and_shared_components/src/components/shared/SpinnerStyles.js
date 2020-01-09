import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blackout: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(77,1,78,0.97)',
    zIndex: 50,
    elevation: 50,
  },
  header: {
    fontSize: 30,
    color: '#fec7b1',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 30,
  },
});

export default styles;
