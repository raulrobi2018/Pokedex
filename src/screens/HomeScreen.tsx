import React, {useEffect, useState} from 'react';
import {Image, FlatList, ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPagination} from '../hooks/usePokemonPagination';
import {styles} from '../styles/appStyles';
import {styles as homeStyles} from '../styles/homeStyles';
import {styles as searchStyles} from '../styles/searchStyles';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPagination();
  const searchSty = searchStyles(top);

  // SearchUnput hooks
  const [term, setTerm] = useState('');
  const {isFetching, simplePokemonList: simplePok} = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(poke =>
          poke.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(
        pokemon => pokemon.id === term,
      );
      // Esta funcion espera un array de SimplePokemon, por lo tanto al devolver el resultado
      //dentro de llaves rectas, estamos devolviendo un array con 1 solo elemento ya que el
      //find solo me va a devolver 1 elemento
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={(styles.globalMargin, styles.pokebola)}
      />

      <View style={(styles.globalMargin, homeStyles.container)}>
        <SearchInput
          onDebounce={value => setTerm(value)}
          style={searchSty.inputContainer}
        />

        <FlatList
          style={homeStyles.flatListContainer}
          data={term.length > 0 ? pokemonFiltered : simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator
              style={homeStyles.activityIndicator}
              size={20}
              color="grey"
            />
          }
          // ListHeaderComponent={
          //   <Text
          //     style={{
          //       ...styles.title,
          //       ...styles.globalMargin,
          //       top: top + 20,
          //       marginBottom: top + 20,
          //     }}>
          //     Pokedex
          //   </Text>
          // }
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </>
  );
};
