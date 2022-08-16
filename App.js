import React, {useState} from 'react';
import AppTextInput from './App/component/AppTextInput';
import colors from './App/confing/colors';
import Screen from './App/component/Screen';
import LoginScreenFormik from './App/screens/LoginScreenFormik';
import {Image, StyleSheet} from 'react-native';
export default function App() {
  return (
    <Screen>
      <LoginScreenFormik></LoginScreenFormik>
    </Screen>
  );
}
