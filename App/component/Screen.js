import React from 'react';
import {
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../confing/colors';

function Screen({children, style}) {
  /*  style={[styles.Text, style]} */
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
export default Screen;
