import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from './Main';
import MessagesScreen from './MessagesScreen';

const Stack = createNativeStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



