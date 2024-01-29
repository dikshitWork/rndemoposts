import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostsScreen, ProfileScreen} from '../screens';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
