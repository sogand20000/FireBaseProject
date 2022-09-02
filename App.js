import React, {useState} from 'react';
import AppTextInput from './App/component/AppTextInput';
import colors from './App/confing/colors';
import Screen from './App/component/Screen';
import LoginScreenFormik from './App/screens/LoginScreenFormik';
import {Image, StyleSheet} from 'react-native';
import Timer from './App/component/Timer';
import AppPicker from './App/component/AppPicker';
import ListingEditScreen from './App/screens/ListingEditScreen';
/* export default function App() {
  return (
    <Screen>
       <ListingEditScreen></ListingEditScreen> 
    </Screen>
  );
}
 */

const categories = [
  {label: 'furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
];
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        icon="apps"
        items={categories}
        iconColor={colors.black}
        placeholder="Category"></AppPicker>
      <AppTextInput icon="email" iconColor={colors.black}></AppTextInput>
    </Screen>
  );
}
