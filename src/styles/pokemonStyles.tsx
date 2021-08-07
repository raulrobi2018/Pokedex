import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = (color: string) =>
  StyleSheet.create({
    headerContainer: {
      alignItems: 'center',
      backgroundColor: color,
      height: height - height * 0.55,
      width,
      zIndex: 999,
      borderBottomLeftRadius: 1000,
      borderBottomRightRadius: 1000,
    },
    name: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      top: 5,
      left: 10,
      opacity: 0.8,
    },
    whitePokeballContainer: {
      width: 100,
      height: 100,
      position: 'absolute',
      bottom: 0,
      right: 0,
      overflow: 'hidden',
    },
    whitePokeball: {
      width: 100,
      height: 100,
      position: 'absolute',
      bottom: -20,
      right: -20,
      opacity: 0.5,
    },
    pokemonImage: {
      width: 110,
      height: 110,
      position: 'absolute',
      right: -8,
      bottom: -8,
    },
  });
