import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const RecipeCard = ({ imageUrl, recipeName, postedTimeAgo, categoryTag, descriptionText, creatorName, rating }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
      <View style={styles.detailsContainer}>
        <Text style={styles.recipeName}>{recipeName}</Text>
        <Text style={styles.categoryTag}>{categoryTag}</Text>
        <Text style={styles.descriptionText}>{descriptionText}</Text>
        <View style={styles.creatorContainer}>
          <FontAwesomeIcon icon={faBookmark} style={styles.bookmarkIcon} />
          <Text style={styles.creatorName}>{creatorName}</Text>
        </View>
        {/* Rating should be rendered based on the number of stars */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  detailsContainer: {
    paddingVertical: 10,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryTag: {
    color: '#888',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
  },
  creatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookmarkIcon: {
    marginRight: 5,
    color: '#888',
  },
  creatorName: {
    color: '#888',
  },
  // Add styles for rating (e.g., stars)
});

export default RecipeCard;
