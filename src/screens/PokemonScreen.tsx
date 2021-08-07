import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../navigation/Navigator';
import {styles as pokemonStyles} from '../styles/pokemonStyles';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;

  const styles = pokemonStyles(color);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.8}>
        <Icon />
      </TouchableOpacity>
      <Text>{simplePokemon.name}</Text>
      <Text>{simplePokemon.picture}</Text>
      <Text>#{simplePokemon.id}</Text>
      <Text>{color}</Text>
      {/* <Image source={simplePokemon.picture} /> */}
    </View>
  );
};
