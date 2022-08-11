import {StyleSheet} from 'react-native';
import colors from '../../confing/colors';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.tomato,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
export default styles;
