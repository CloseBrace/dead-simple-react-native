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
    borderTopColor: '#6b275d',
    borderTopWidth: 1,
    color: '#fecbde',
    fontSize: 20,
    fontWeight: '100',
    paddingVertical: 15,
  },
  logoBox: {
    backgroundColor: '#FFFFFF',
    borderColor: '#f5bbae',
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
    color: '#fec7b1',
    fontSize: 30,
    textAlign: 'center',
  },
  warning: {
    color: '#fecbde',
    fontSize: 30,
    fontWeight: '600',
  },
});

export default styles;
