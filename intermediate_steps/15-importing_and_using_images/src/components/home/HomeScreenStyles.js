import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    backgroundColor: 'transparent',
    padding: 30,
    flex: 1,
  },
  flatList: {
    marginBottom: 30,
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
    height: 80,
    width: '100%',
  },
  item: {
    borderStyle: 'solid',
    borderTopColor: '#000000',
    borderTopWidth: 1,
    color: '#444444',
    fontSize: 20,
    fontWeight: '100',
    paddingVertical: 15,
  },
  logoBox: {
    backgroundColor: '#FFFFFF',
    borderColor: '#444444',
    borderStyle: 'solid',
    borderWidth: 1,
    elevation: 5,
    height: 200,
    width: 200,
  },
  logoWrap: {
    alignItems: 'center',
    margin: 30,
  },
  mainBackground: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#333333',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default styles;
