import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Icon from '../component/Icon';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';
import colors from '../confing/colors';
const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.lightGreen,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.tomato,
    },
  },
];
function AccountScreen() {
  return (
    <Screen style={styles.Screen}>
      <View>
        <ListItem
          title="Somayeh Ghanavati"
          subTitle="S.ghanavati94@gmail.com"
          image={require('../assets/myPhoto.png')}></ListItem>
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}></Icon>
              }></ListItem>
          )}></FlatList>
      </View>
      <View>
        <ListItem
          title="Log Out"
          IconComponent={
            <Icon name="logout" backgroundColor={colors.lightYellow}></Icon>
          }></ListItem>
      </View>
    </Screen>
  );
}

export default AccountScreen;
const styles = StyleSheet.create({
  Screen: {backgroundColor: colors.lightGray},
});
