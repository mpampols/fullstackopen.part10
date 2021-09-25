import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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
  scrollContainer: {
    backgroundColor: "#24292e",
  }
});

const AppBar = () => {
  return (
    <View>
      <ScrollView horizontal style={ styles.scrollContainer }>
        <View style={ styles.container }>
          <AppBarTab linkTo="/" tabTitle="Repositories" />
          <AppBarTab linkTo="/signin" tabTitle="Sign In" />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
