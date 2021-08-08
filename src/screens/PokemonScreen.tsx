import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../navigation/Navigator';
import { styles as pokemonStyles, styles } from '../styles/pokemonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;

  const {top} = useSafeAreaInsets();
  const styles = pokemonStyles(color, top);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton} activeOpacity={0.8} onPress={()=> navigation.pop()}>
        <Icon name="arrow-back" color="white" size={35} />
      </TouchableOpacity>
      <Text style={styles.name}>{simplePokemon.name.charAt(0).toUpperCase() + simplePokemon.name.slice(1)}</Text>
      <Text style={styles.id}>#{simplePokemon.id}</Text>

      <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.whitePokeball}
          />

      <Text>{simplePokemon.picture}</Text>
      <Text>{color}</Text>
      {/* <Image source={simplePokemon.picture} /> */}
    </View>
  );
};
