import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    color: '#fecbde',
    fontSize: 24,
    lineHeight: 40,
    marginBottom: 40,
  },
  bold: {
    fontWeight: '600',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#fec7b1',
    borderColor: '#6f156f',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    elevation: 10,
    marginBottom: 10,
    padding: 10,
    width: 150,
  },
  buttonText: {
    color: '#6f156f',
    fontSize: 30,
    textAlign: 'center',
  },
  content: {
    backgroundColor: 'transparent',
    padding: 30,
  },
  label: {
    color: '#FFF',
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#FFF',
    borderColor: '#6f156f',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    color: '#6f156f',
    fontSize: 24,
    margin: 10,
    padding: 10,
  },
  title: {
    color: '#fec7b1',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default styles;
