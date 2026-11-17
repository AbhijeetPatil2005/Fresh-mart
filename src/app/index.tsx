
import React, { useState } from 'react';

import {
  View,
  Text as RNText,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  // Search state
  

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
     
        <View >
             <RNText style={styles.brand}>Fresh Mart</RNText>
        </View>

        <View >
             <RNText style={styles.deliveryTime}>Delivery in 10 mins</RNText>
        </View>

        <View >
             <RNText style={styles.locationIcon}>📍 Electronic City</RNText>
             
        </View>
 
    </View>
   
    <View style={styles.searchSection}>
  <View style={styles.searchContainer}>
    <RNText style={styles.searchIcon}>🔍</RNText>
    <TextInput
      style={styles.searchInput}
      placeholder='Search "milk", "bread", "eggs"...'
      placeholderTextColor="#9CA3AF"
      // returnKeyType="search"
      onSubmitEditing={() => Keyboard.dismiss()}
    />
  </View>
</View>



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
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#18181B',
    marginBottom: 18,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
  },

  categoryWrapper: {
    width: '33.3333%',
    paddingHorizontal: 6,
  },
});