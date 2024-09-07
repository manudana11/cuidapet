// src/components/PetReminder.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { db } from '../services/firebase';

const PetReminder = ({ pet }) => {
  const scheduleReminder = async () => {
    try {
      const notificationData = {
        title: 'Pet Reminder',
        body: `It's time to feed ${pet.name}!`,
      };

      // Schedule a reminder
      await messaging().sendMessage(notificationData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Text>Remind to feed {pet.name}</Text>
      <Button title="Schedule Reminder" onPress={scheduleReminder} />
    </View>
  );
};

export default PetReminder;
