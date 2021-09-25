import React from 'react';
import * as yup from 'yup';
import { View, Button, Pressable } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import formStyles from './formStyles';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  mass: '0',
  height: '0',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={formStyles.container}>
      <View style={formStyles.inputContainer}>
        <FormikTextInput
          style={formStyles.input}
          name="username"
          placeholder="Username"
        />
      </View>
      <View style={formStyles.inputContainer}>
        <FormikTextInput
          style={formStyles.input}
          secureTextEntry="true"
          name="password"
          placeholder="Password"
        />
      </View>
      <Pressable onPress={onSubmit}>
        <Button title="Sign in"></Button>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;