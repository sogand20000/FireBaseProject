import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AppTextInput from '../component/AppTextInput';
import AppButton from '../component/AppButton';
import Screen from '../component/Screen';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import AppText from '../component/AppText';
import colors from '../confing/colors';
import ErrorMessage from '../component/ErrorMessage';
import AppFormField from '../component/AppFormField';
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
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validation}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              name="email"></AppFormField>

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="password"
              placeholder="Password"
              secureTextEntry={true}
              name="password"
              textContentType="password"></AppFormField>

            <AppButton title="Login" onPress={handleSubmit}></AppButton>
          </>
        )}
      </Formik>
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
