import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../confing/colors';
import AppText from './AppText';
import Icon from './Icon';
import Screen from './Screen';
import PickerItem from './PickerItem';
function AppPicker({
  selectedItem,
  onSelectItem,
  items,
  icon,
  placeholder,
  iconColor = colors.white,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <View style={styles.leftItem}>
            <Icon
              name={icon}
              backgroundColor={colors.gray}
              iconColor={iconColor}
              style={styles.icon}
              size={60}></Icon>
            <AppText style={styles.text}>
              {selectedItem ? selectedItem.label : placeholder}
            </AppText>
          </View>
          <View style={styles.rightItem}>
            <MaterialCommunityIcons
              name="chevron-down"
              color={iconColor}
              size={20}></MaterialCommunityIcons>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={item => item.value}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}></PickerItem>
            )}></FlatList>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    //padding: 10,
    marginVertical: 10,
  },
  leftItem: {width: '90%', flexDirection: 'row'},
  rightItem: {width: '10%', marginTop: 20},
  icon: {
    marginLeft: 40,
  },
  text: {},
});

export default AppPicker;
