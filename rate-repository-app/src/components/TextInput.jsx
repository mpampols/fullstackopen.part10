import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import formStyles from './formStyles';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;