import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AppText from './../component/AppText';
import colors from '../confing/colors';
import ListItem from '../component/ListItem';

function ListingDatileScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/tree.jpg')}></Image>
      <AppText style={styles.title}>Tree is very nice</AppText>
      <AppText style={styles.subTitle}>10 years</AppText>
      <View style={styles.userContainer}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="5 Listings"
          image={require('../assets/tree.jpg')}></ListItem>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.blue,
    fontWeight: 'bold',
    padding: 10,
  },
  title: {padding: 10, fontSize: 20, color: colors.black},
  userContainer: {
    marginVertical: 10,
  },
});
export default ListingDatileScreen;
