import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../component/Screen';
import {
  AppForm as Form,
  AppFormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../component/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});
const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];
export default function ListingEditScreen() {
  return (
    <Screen>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField name="title" placeholder="Title"></AppFormField>
        <AppFormField
          keybordType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"></AppFormField>
        <Picker items={categories} name="category" placeholder="Category" />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({});
