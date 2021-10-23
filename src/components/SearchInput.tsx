import React, {useRef, useState, useEffect} from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {styles as searchStyles} from '../styles/searchStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp} from 'react-native';
import {useDebounce} from '../hooks/useDebounce';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {useNavigation} from '@react-navigation/core';
import ImageColors from 'react-native-image-colors';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}

const DEFAULT_COLOR = '#a6a6a6';

//El style recibido aquí no se utiliza porque yo lo hice con
//styles en archivos aparte
export const SearchInput = ({style, onDebounce}: Props) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const styles = searchStyles(top);

  const [textValue, setTextValue] = useState('');
  const debeouncedValue = useDebounce(textValue);

  const {findPokemon, simplePokemon, isFetching} = usePokemonSearch();

  useEffect(() => {
    onDebounce(debeouncedValue);
  }, [debeouncedValue]);

  const [bgColor, setBgColor] = useState('grey');

  //Utilizado para evitar cambios en el estado cuando el componente no está montado
  const isMounted = useRef(true);

  const handleOnPres = () => {
    findPokemon(textValue);
  };

  useEffect(() => {
    if (simplePokemon) {
      //   IOS background
      //Android: dominant color
      ImageColors.getColors(simplePokemon.picture, {fallback: DEFAULT_COLOR})
        .then(colors => {
          if (!isMounted.current) return;

          colors.platform === 'android'
            ? setBgColor(colors.dominant || DEFAULT_COLOR)
            : setBgColor(colors.background || DEFAULT_COLOR);
        })
        .catch(err => {
          setBgColor(DEFAULT_COLOR);
        });

      navigation.navigate('PokemonScreen', {
        simplePokemon,
        color: bgColor,
      });

      return () => {
        isMounted.current = false;
      };
    }
  }, [simplePokemon]);

  return !{isFetching} ? (
    <ActivityIndicator size={50} color="grey" />
  ) : (
    <View style={styles.inputContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Nombre o número"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <TouchableOpacity onPress={handleOnPres}>
          <Icon color="gray" size={30} name="search" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
