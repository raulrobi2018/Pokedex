import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = (color: string, top: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      backgroundColor: color,
      height: height - height * 0.55,
      width,
      zIndex: 999,
      borderBottomLeftRadius: 1000,
      borderBottomRightRadius: 1000,
      alignItems: 'center',
      opacity: 1,
    },
    backButton: {
      position: 'absolute',
      top: top + 5,
      left: 20,
    },
    name: {
      color: 'white',
      fontSize: 35,
      alignSelf: 'flex-start',
      left: 20,
      top: top + 40,
    },
    id: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'flex-start',
      left: 20,
      top: top + 45,
    },
    whitePokeball: {
      width: 250,
      height: 250,
      bottom: -20,
      opacity: 0.7,
    },
    pokemonImage: {
      width: 250,
      height: 250,
      position: 'absolute',
      bottom: -15,
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
