import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';
import ListItemSeparator from '../component/ListItemSeparator';
import ListItemDeleteAction from '../component/ListItemDeleteAction';
const intiMesssages = [
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
  const [messsages, setMesssages] = useState(intiMesssages);
  const handelDelete = messsage => {
    setMesssages(messsages.filter(x => x.id != messsage.id));
  };
  const [refreshing, setrefreshing] = useState(false);
  return (
    <Screen>
      <FlatList
        data={messsages}
        keyExtractor={messsage => messsage.id}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Item Selected ', item)}
            renderRightAction={() => (
              <ListItemDeleteAction
                onPress={() => handelDelete(item)}></ListItemDeleteAction>
            )}></ListItem>
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMesssages([
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../assets/myPhoto.png'),
            },
          ]);
        }}></FlatList>
    </Screen>
  );
}

export default MessagesScreen;
