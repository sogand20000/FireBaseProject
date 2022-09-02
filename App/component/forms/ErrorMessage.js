import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import colors from '../../confing/colors';

export default function ErrorMessage({error, visible}) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 20,
    color: colors.tomato,
  },
});
