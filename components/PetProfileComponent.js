// src/components/PetProfile.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { db, auth } from '../services/firebase';

const PetProfile = ({ petId, navigation }) => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetData = async () => {
      const petDoc = await db.collection('pets').doc(petId).get();
      if (petDoc.exists) {
        setPet(petDoc.data());
      }
    };
    fetchPetData();
  }, [petId]);

  const deletePet = async () => {
    await db.collection('pets').doc(petId).delete();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {pet ? (
        <>
          <Text style={styles.title}>Pet Name: {pet.name}</Text>
          <Text>Species: {pet.species}</Text>
          <Text>Age: {pet.age}</Text>
          <Button title="Edit Pet" onPress={() => navigation.navigate('EditPet', { petId })} />
          <Button title="Delete Pet" onPress={deletePet} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PetProfile;
