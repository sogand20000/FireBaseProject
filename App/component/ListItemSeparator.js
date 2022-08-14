import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../confing/colors';

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}
const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: colors.gray,
  },
});
export default ListItemSeparator;
