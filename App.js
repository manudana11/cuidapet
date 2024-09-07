// src/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import PetScreen from './screens/PetScreen';
import PetProfile from './components/PetProfileComponent';
import EditPetScreen from './screens/EditPetScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pet" component={PetScreen} />
        <Stack.Screen name="PetProfile" component={PetProfile} />
        <Stack.Screen name="EditPet" component={EditPetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
