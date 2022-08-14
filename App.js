import React from 'react';
import Icon from './App/component/Icon';
import Screen from './App/component/Screen';
import colors from './App/confing/colors';
import ListItem from './App/component/ListItem';
export default function App() {
  return (
    <Screen>
      <ListItem
        title="My title"
        imageComponent={<Icon name="email"></Icon>}></ListItem>
    </Screen>
  );
}
