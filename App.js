import React, {useState} from 'react';
import AppTextInput from './App/component/AppTextInput';
import AppPicker from './App/component/AppPicker';
import colors from './App/confing/colors';
import Screen from './App/component/Screen';
import LoginScreen from './App/screens/LoginScreen';
export default function App() {
  return (
    <Screen>
      <LoginScreen></LoginScreen>
    </Screen>
  );
}
