import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../confing/colors';
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.Image}
        source={require('./../assets/tree.jpg')}></Image>
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  Image: {height: '100%', width: '100%'},
  container: {
    black: 'black',
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.red,
    position: 'absolute',
    left: 20,
    top: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.blue,
    position: 'absolute',
    right: 20,
    top: 30,
  },
});
