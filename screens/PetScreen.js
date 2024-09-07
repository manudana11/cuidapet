// src/screens/PetScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { db, auth } from '../services/firebase';

const PetScreen = ({ navigation }) => {
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const addPet = async () => {
    try {
      await db.collection('pets').add({
        ownerId: auth.currentUser.uid,
        name: petName,
        species,
        age,
      });
      setMessage('Pet added successfully!');
      navigation.navigate('Home');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Pet Name</Text>
      <TextInput value={petName} onChangeText={setPetName} />
      <Text>Species</Text>
      <TextInput value={species} onChangeText={setSpecies} />
      <Text>Age</Text>
      <TextInput value={age} onChangeText={setAge} />
      <Button title="Add Pet" onPress={addPet} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default PetScreen;
