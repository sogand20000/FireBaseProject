import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AppText from './AppText';

function PickerItem({label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}
export default PickerItem;
