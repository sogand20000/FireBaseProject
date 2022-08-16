import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from '../component/AppTextInput';
import AppButton from '../component/AppButton';
import Screen from '../component/Screen';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Screen>
      <Image
        style={styles.Image}
        source={require('../assets/Logo.png')}></Image>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"></AppTextInput>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={text => setPassword(text)}
        keyboardType="password"
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"></AppTextInput>
      <AppButton title="Login" onPress={() => console.log(email)}></AppButton>
    </Screen>
  );
}
const styles = StyleSheet.create({
  Image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    paddingTop: 20,
  },
});
