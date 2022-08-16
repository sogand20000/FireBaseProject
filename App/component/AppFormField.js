import {View, Text} from 'react-native';
import React from 'react';
import AppTextInput from '../component/AppTextInput';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
export default function AppFormField({name, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={() => handleChange(name)}
        {...otherProps}></AppTextInput>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}
