// src/screens/HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { db, auth } from '../services/firebase';

const HomeScreen = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const petsRef = db.collection('pets').where('ownerId', '==', auth.currentUser.uid);
      const snapshot = await petsRef.get();
      const petList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPets(petList);
    };
    fetchPets();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Add New Pet" onPress={() => navigation.navigate('Pet')} />
      <FlatList
        data={pets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PetProfile', { petId: item.id })}>
            <Text style={styles.petItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  petItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    marginVertical: 8,
    borderRadius: 10,
  },
});

export default HomeScreen;
