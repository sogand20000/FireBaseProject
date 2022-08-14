import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../confing/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          size={30}
          color="white"></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="white"></MaterialCommunityIcons>
      </View>

      <Image
        resizeMode="contain"
        style={styles.Image}
        source={require('../assets/tree.jpg')}></Image>
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  Image: {height: '100%', width: '100%'},
  container: {
    black: 'black',
    backgroundColor: colors.black,
    //flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    left: 20,
    top: 30,
  },
  deleteIcon: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
});
