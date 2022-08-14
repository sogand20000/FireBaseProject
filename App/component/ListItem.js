import React from 'react';
import {Image, View, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../confing/colors';
import AppText from './AppText';

function ListItem({title, subTitle, image, onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image}></Image>
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  subTitle: {
    marginTop: 5,
    fontSize: 18,
    color: colors.gray,
  },
});
