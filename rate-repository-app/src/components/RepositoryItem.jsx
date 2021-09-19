import React from 'react';
import { Text } from 'react-native';

const RepositoryItem = ({fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage}) => {
  return (
    <div>
      <div><Text>Full name: { fullName }</Text></div>
      <div><Text>Description: { description }</Text></div>
      <div><Text>Language: { language }</Text></div>
      <div><Text>Stars: { stargazersCount }</Text></div>
      <div><Text>Forks: { forksCount }</Text></div>
      <div><Text>Reviews: { reviewCount }</Text></div>
      <div><Text>Rating: { ratingAverage }</Text></div>
    </div>
  );
};

export default RepositoryItem;