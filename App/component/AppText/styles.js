import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: 'gray',
    textAlign: 'center',
    marginTop: 18,
    marginLeft: 10,
  },
});

export default styles;
