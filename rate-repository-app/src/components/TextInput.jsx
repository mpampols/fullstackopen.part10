import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import textInputStyles from './TextInputStyles';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && textInputStyles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;