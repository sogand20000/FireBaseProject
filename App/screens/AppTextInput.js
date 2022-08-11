import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {MaterialIcons} from 'react-native-vector-icons/MaterialIcons';

import colors from '../confing/colors';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialIcons name={icon} size={20} style={styles.icon} />}
      <TextInput {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red', //defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
