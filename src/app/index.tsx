
import React from 'react';
import { categories } from '@/data/categories';

import {
  View,
  Text as RNText,
  TextInput,
  StyleSheet,
  Keyboard,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryCard from '@/components/CategoryCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* DELIVERY HEADER */}
      <View style={styles.header}>
        <View>
          <RNText style={styles.brand}>
            Fresh Mart
          </RNText>
        </View>

        <View>
          <RNText style={styles.deliveryTime}>
            Delivery in 10 mins
          </RNText>
        </View>

        <View>
          <RNText style={styles.locationIcon}>
            📍 Electronic City
          </RNText>
        </View>
      </View>

      {/* SEARCH SECTION */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <RNText style={styles.searchIcon}>
            🔍
          </RNText>

          <TextInput
            style={styles.searchInput}
            placeholder='Search "milk", "bread", "eggs"...'
            placeholderTextColor="#9CA3AF"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
      </View>

      {/* SCROLLABLE CATEGORY SECTION */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.categorySection}>

          <RNText style={styles.sectionTitle}>
            Shop by Category
          </RNText>

          {/* CATEGORY GRID */}
          <View style={styles.categoryGrid}>
            {categories.map((category) => (
              <View
                key={category.id}
                style={styles.categoryWrapper}
              >
                <CategoryCard category={category} />
              </View>
            ))}
          </View>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // DELIVERY HEADER
  header: {
    backgroundColor: '#FACC15',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brandContainer: {
    flex: 1,
  },

  brand: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#18181B',
  },

  deliveryTime: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#18181B',
    marginTop: 4,
  },

  profileIcon: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  profileEmoji: {
    fontSize: 24,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  locationIcon: {
    fontSize: 22,
    marginRight: 8,
  },

  locationDetails: {
    flex: 1,
  },

  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18181B',
  },

  address: {
    fontSize: 13,
    color: '#3F3F46',
    marginTop: 2,
  },

  // SEARCH SECTION
  searchSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
  },

  searchIcon: {
    fontSize: 19,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#18181B',
    paddingVertical: 0,
  },

  clearButton: {
    padding: 8,
    marginLeft: 4,
  },

  clearText: {
    fontSize: 16,
    color: '#6B7280',
  },

  searchPreview: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12,
  },

  // SCROLL VIEW
  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  // CATEGORY SECTION
  categorySection: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#18181B',
    marginBottom: 20,
    letterSpacing: 0.2,
  },

  // 2-COLUMN CATEGORY GRID
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 24,
  },

  categoryWrapper: {
    width: '50%',
    paddingHorizontal: 7,
  },
});