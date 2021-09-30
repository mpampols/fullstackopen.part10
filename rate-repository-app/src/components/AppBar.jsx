import React from 'react';
import AppBarTab from './AppBarTab';

import { View, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
    paddingTop: "25px",
    paddingRight: "10px",
    paddingBottom: "15px",
    paddingLeft: "10px",
    flexDirection: 'row',
    padding: 20
  },
  scrollContainer: {
    backgroundColor: "#24292e",
  }
});

const AppBar = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER);
  const loggedIn = data && data.authorizedUser;

  return (
    <View>
      <ScrollView horizontal style={ styles.scrollContainer }>
        <View style={ styles.container }>
          <AppBarTab tabTitle="Repositories" linkTo="/" show={loggedIn}/>
          <AppBarTab tabTitle="Sign in" linkTo="/signin" show={!loggedIn}/>
          <AppBarTab tabTitle="Sign out" linkTo="/signout" show={loggedIn}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
