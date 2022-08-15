import React from 'react';
import Icon from './App/component/Icon';
import Screen from './App/component/Screen';
import colors from './App/confing/colors';
import ListingScreen from './App/screens/ListingScreen';
export default function App() {
  return (
    <Screen>
      <ListingScreen></ListingScreen>
    </Screen>
  );
}
