import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {PokemonScreen} from '../screens/PokemonScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {RootStackParams} from './HomeTab';

const SearchTabNavigator = createStackNavigator<RootStackParams>();

export const SearchTab = () => {
  return (
    <SearchTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <SearchTabNavigator.Screen name="SearchScreen" component={SearchScreen} />
      <SearchTabNavigator.Screen
        name="PokemonScreen"
        component={PokemonScreen}
      />
    </SearchTabNavigator.Navigator>
  );
};
