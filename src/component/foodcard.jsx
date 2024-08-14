import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements'; // Assuming usage of react-native-elements for star rating

const FoodCard = () => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'image-url' }} style={styles.image} />
      <Text style={styles.title}>Spaghetti Carbonara</Text>
      <Text style={styles.subtitle}>
        A classic Italian pasta dish featuring creamy eggs, savory pancetta, and a generous sprinkle of Parmesan cheese. Perfect for a quick yet indulgent dinner.
      </Text>
      <View style={styles.profileSection}>
        {/* Avatar component to be created or imported */}
        {/* <Avatar source={{ uri: 'avatar-url' }} /> */}
        <Text>Rosanna Sasso</Text>
      </View>
      <Rating
        type='star'
        imageSize={20}
        readonly
        startingValue={4} // Assuming 4 out of 5 stars rating
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    // Add shadows and other styling as needed
  },
  image: {
    width: '100%',
    height: 200,
    // Style as needed
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    // Style as needed
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    // Style as needed
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // Style as needed
  },
});

export default FoodCard;
