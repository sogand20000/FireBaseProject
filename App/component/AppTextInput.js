import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../confing/colors';
import Icon from './Icon';

function AppTextInput({icon, iconColor = colors.white, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Icon
        name="email"
        iconColor={iconColor}
        backgroundColor={colors.gray}
        size={60}></Icon>
      <TextInput
        placeholder="User Name"
        style={styles.TextInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },

  TextInput: {
    marginLeft: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
