import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../confing/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function Icon({name, size = 40, backgroundColor = '#000', iconColor = '#fff'}) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size * 0.5}></MaterialCommunityIcons>
    </View>
  );
}

export default Icon;
