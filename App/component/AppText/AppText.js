import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
const AppText = ({children, style}) => {
  return (
    <View style={styles.textContaner}>
      <Text style={[styles.Text, style]}>{children}</Text>
    </View>
  );
};

export default AppText;
