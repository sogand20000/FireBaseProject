/* import React, {useState} from 'react';
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
import App from '../../App';
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
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
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
/*  useage in App.ja
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
 */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from './AppText';
import Screen from './Screen';
import colors from '../confing/colors';

/* import defaultStyles from '../config/styles';
 */ import PickerItem from './PickerItem';
/* selectedItem,
  onSelectItem,
  items,
  icon,
  placeholder,
  (iconColor = colors.white), */
function AppPicker({
  icon,
  iconColor = colors.white,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.blue}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.black,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
