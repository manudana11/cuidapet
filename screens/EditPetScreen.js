// src/screens/EditPetScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { db } from '../services/firebase';

const EditPetScreen = ({ route, navigation }) => {
  const { petId } = route.params;
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const fetchPetData = async () => {
      const petDoc = await db.collection('pets').doc(petId).get();
      if (petDoc.exists) {
        const petData = petDoc.data();
        setPetName(petData.name);
        setSpecies(petData.species);
        setAge(petData.age);
      }
    };
    fetchPetData();
  }, [petId]);

  const updatePet = async () => {
    try {
      await db.collection('pets').doc(petId).update({
        name: petName,
        species,
        age,
      });
      navigation.navigate('Home');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Edit Pet Name</Text>
      <TextInput value={petName} onChangeText={setPetName} />
      <Text>Edit Species</Text>
      <TextInput value={species} onChangeText={setSpecies} />
      <Text>Edit Age</Text>
      <TextInput value={age} onChangeText={setAge} />
      <Button title="Save Changes" onPress={updatePet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default EditPetScreen;
