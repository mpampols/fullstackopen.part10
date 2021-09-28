import React from 'react';
import * as yup from 'yup';
import { View, Button } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import formStyles from './formStyles';
import { useSignIn } from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
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
      <Button title="Sign in" onPress={onSubmit}></Button>
    </View>
  );
};

export default SignIn;