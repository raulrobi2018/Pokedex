import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../navigation/HomeTab';
import {styles as pokemonStyles} from '../styles/pokemonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonDetails} from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {top} = useSafeAreaInsets();
  const styles = pokemonStyles(color, top);

  const {isLoading, pokemon: fullPokemon} = usePokemon(simplePokemon.id);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Header */}
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.8}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back" color="white" size={35} />
        </TouchableOpacity>

        <Text style={styles.name}>
          {simplePokemon.name.charAt(0).toUpperCase() +
            simplePokemon.name.slice(1)}
        </Text>

        <Text style={styles.id}>#{simplePokemon.id}</Text>

        {/* Background image */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.whitePokeball}
        />

        {/* Pokemon image */}
        <FadeInImage uri={simplePokemon.picture} style={styles.pokemonImage} />
      </View>

      {/* Details and loading */}

      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color={color} size={70} />
        </View>
      ) : (
        <PokemonDetails pokemon={fullPokemon} color={color} />
      )}
    </View>
  );
};
