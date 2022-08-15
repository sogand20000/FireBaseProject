import React from 'react';
import {Image, View, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../confing/colors';
import AppText from './AppText';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightAction,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightAction}>
        <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image}></Image>}
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: colors.white,
    marginBottom: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  subTitle: {
    marginTop: 5,
    fontSize: 18,
    color: colors.gray,
  },
});
