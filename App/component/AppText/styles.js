import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: 'gray',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    textShadowColor: 'pink',
    textShadowRadius: 14,
  },
});

export default styles;
