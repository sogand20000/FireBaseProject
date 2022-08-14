import React from 'react';
import {SafeAreaView, Platform, StatusBar, StyleSheet} from 'react-native';

function Screen({children}) {
  return <SafeAreaView styles={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
export default Screen;
