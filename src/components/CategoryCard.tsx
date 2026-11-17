
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import type { Category } from '@/data/categories';

type CategoryPropTypes = {
  category: Category;
  // onPress: (category: Category) => void;
};

const CategoryCard = ({ category }: CategoryPropTypes) => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: category.image }}
          style={styles.image}
        />
      </View>

      <Text
        style={styles.name}
        numberOfLines={2}
      >
        {category.name}
      </Text>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    alignItems: 'center',
  },

  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#27272A',
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 0.2,
    lineHeight: 21,
  },
});