import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import theme from '../theme';
import preciseNumber from './utils/preciseNumber';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15
  },
  rowView: {
    flexDirection: 'row',
    gap: 10
  },
  avatarContainer: {
    paddingRight: 15,
    flexDirection: 'row'
  },
  userdataContainer: {
    flexDirection: 'row'
  },
  languageContainer: {
    alignItems: 'flex-start'
  },
  language: {
    color: "#fff",
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 3,
    marginTop: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    flex: 4
  },
  dataItem: {
    alignSelf: 'flex-start',
    gap: 10,
    flexGrow: 4,
    textAlign: 'center',
    marginTop: 15
  }
});

const RepositoryItem = (
  {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl
  }) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.rowView }>
        <Image
          style={{ width: 75, height: 75, borderRadius: 10 }}
          source={{
            uri: ownerAvatarUrl
          }}>
        </Image>
        <View>
          <View><Text style={{ fontWeight: 'bold' }}>{ fullName }</Text></View>
          <View><Text style={{ marginTop: 10 }} color="textSecondary">{ description }</Text></View>
          <View style={ styles.languageContainer }>
            <Text style={ styles.language }>{ language }</Text>
          </View>
        </View>
      </View>
      <View style={ styles.rowView }>
        <View style={ styles.dataContainer }>
          <View style={ styles.dataItem }>
            <Text style={{ fontWeight: 'bold' }} fontWeight="bold">{ preciseNumber(stargazersCount) }</Text>
            <Text color="textSecondary">Stars</Text>
          </View>
          <View style={ styles.dataItem }>
            <Text style={{ fontWeight: 'bold' }} fontWeight="bold">{ preciseNumber(forksCount) }</Text>
            <Text color="textSecondary">Forks</Text>
          </View>
          <View style={ styles.dataItem}>
            <Text style={{ fontWeight: 'bold' }} fontWeight="bold">{ preciseNumber(reviewCount) }</Text>
            <Text color="textSecondary">Reviews</Text>
          </View>
          <View style={ styles.dataItem }>
            <Text style={{ fontWeight: 'bold' }} fontWeight="bold">{ ratingAverage }</Text>
            <Text color="textSecondary">Rating</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;