import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {RootStackParams} from '../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;

  return (
    <View style={{backgroundColor: color, display: 'flex', flex: 1}}>
      <Text>{simplePokemon.name}</Text>
      <Text>{simplePokemon.picture}</Text>
      <Text>#{simplePokemon.id}</Text>
      <Text>{color}</Text>
      {/* <Image source={{simplePokemon.picture}} /> */}
    </View>
  );
};
