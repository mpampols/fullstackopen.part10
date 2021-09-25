import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  whiteText: {
    color: "#ffffff",
    fontWeight: "bold"
  },
});

const onPressFunction = () => {
  console.log("pressed");
};

const AppBarTab = ({ tabTitle }) => {
  return (
    <Pressable onPress={onPressFunction}>
      <Text style={ styles.whiteText }>{ tabTitle }</Text>
    </Pressable>
  );
};

export default AppBarTab;