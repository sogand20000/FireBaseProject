import React from 'react';
import {View} from 'react-native';

import Card from './App/component/Card';
export default function App() {
  return (
    <View style={{backgroundColor: '#f8f4f4', padding: 20, paddingTop: 100}}>
      <Card
        title="Tree is very nice"
        subTitle="10 years"
        image={require('./App/assets/tree.jpg')}></Card>
    </View>
  );
}
