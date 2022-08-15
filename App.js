import React, {useState} from 'react';
import AppTextInput from './App/component/AppTextInput';
import AppPicker from './App/component/AppPicker';
import colors from './App/confing/colors';
import Screen from './App/component/Screen';
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
