import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AppTextInput from '../component/AppTextInput';
import AppButton from '../component/AppButton';
import Screen from '../component/Screen';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import AppText from '../component/AppText';
import colors from '../confing/colors';
/* import ErrorMessage from '../component/forms/ErrorMessage';
import AppFormField from '../component/forms/AppFormField'; */
import SubmitButton from '../component/SubmitButton';
/* import AppForm from '../component/forms/AppForm';
 */
import {AppForm, AppFormField, ErrorMessage} from '../component/forms';
const validation = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
export default function LoginScreen() {
  return (
    <Screen>
      <Image
        style={styles.Image}
        source={require('../assets/Logo.png')}></Image>
      <AppForm
        initialValues={{email: '', password: ''}}
        validationSchema={validation}
        onSubmit={values => console.log(values)}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
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
