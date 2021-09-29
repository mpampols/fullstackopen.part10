import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  whiteText: {
    color: "#ffffff",
    fontWeight: "bold"
  },
});

const onPressFunction = () => {
  console.log("pressed");
};

const AppBarTab = ({ tabTitle, linkTo, show }) => {
  if (!show) {
    return null;
  }

  return (
    <View style={ styles.appBarItem }>
      <Pressable onPress={ onPressFunction }>
        <Link to={ linkTo }>
          <Text style={ styles.whiteText }>{ tabTitle }</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;