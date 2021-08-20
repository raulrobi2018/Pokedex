import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {styles} from '../styles/pokemonCardStyles';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: SimplePokemon;
}

const DEFAULT_COLOR = '#a6a6a6';

export const PokemonCard = ({pokemon}: Props) => {
  const navigation = useNavigation();

  const [bgColor, setBgColor] = useState('grey');

  //Utilizado para evitar cambios en el estado cuando el componente no está montado
  const isMounted = useRef(true);

  useEffect(() => {
    //   IOS background
    //Android: dominant color

    ImageColors.getColors(pokemon.picture, {fallback: DEFAULT_COLOR})
      .then(colors => {
        if (!isMounted.current) return;

        colors.platform === 'android'
          ? setBgColor(colors.dominant || DEFAULT_COLOR)
          : setBgColor(colors.background || DEFAULT_COLOR);
      })
      .catch(err => {
        setBgColor(DEFAULT_COLOR);
      });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        });
      }}
      activeOpacity={0.9}>
      <View style={{...styles.container, backgroundColor: bgColor}}>
        <Text style={styles.name}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          {'\n#' + pokemon.id}
        </Text>

        <View style={styles.whitePokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.whitePokeball}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};
