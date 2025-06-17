import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import HotelsScreen from '@/screens/HotelsScreen';
import ActivitiesScreen from '@/screens/ActivitiesScreen';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator
      screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Hotels" component={HotelsScreen} />
      <Stack.Screen name="Activities" component={ActivitiesScreen}/>
    </Stack.Navigator>
  );
};