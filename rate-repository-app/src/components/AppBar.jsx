import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
    paddingTop: "25px",
    paddingRight: "10px",
    paddingBottom: "15px",
    paddingLeft: "10px",
    flexDirection: 'row',
    gap: 20
  },
});

const AppBar = () => {
  return (
    <View style={ styles.container }>
      <AppBarTab linkTo="/" tabTitle="Repositories" />
      <AppBarTab linkTo="/signin" tabTitle="Sign In" />
    </View>
  );
};

export default AppBar;
