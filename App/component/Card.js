import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../confing/colors';
import AppText from './AppText';

function Card({title, subTitle, image}) {
  return (
    <View style={styles.cart}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerDatilel: {
    padding: 20,
  },
  image: {width: '100%', height: 200},
  cart: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  subTitle: {
    color: colors.blue,
    fontWeight: 'bold',
    padding: 10,
  },
  title: {padding: 10, fontSize: 20, color: colors.black},
});

export default Card;
