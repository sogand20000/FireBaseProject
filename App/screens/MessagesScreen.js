import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';
const messsages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/myPhoto.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/myPhoto.png'),
  },
];
function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messsages}
        keyExtractor={messsage => messsage.id}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}></ListItem>
        )}></FlatList>
    </Screen>
  );
}

export default MessagesScreen;