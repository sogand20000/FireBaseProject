import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../../confing/colors';

import styles from './styles';
function AppButton({title, color = colors.tomato, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
