import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from '../component/Card';
import Screen from '../component/Screen';
const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/tree.jpg'),
  },
  {
    id: 2,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/tree.jpg'),
  },
  {
    id: 3,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/tree.jpg'),
  },
];
export default function ListingScreen() {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}></Card>
        )}></FlatList>
    </Screen>
  );
}
