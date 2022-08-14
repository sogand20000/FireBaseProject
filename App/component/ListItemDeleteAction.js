import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../confing/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback style={styles.detetBox} onPress={onPress}>
      <View>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="white"></MaterialCommunityIcons>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  detetBox: {
    flex: 1,
    backgroundColor: colors.red,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListItemDeleteAction;
