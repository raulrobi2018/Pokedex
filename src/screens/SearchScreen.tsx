import React, {useState} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles as searchStyles} from '../styles/searchStyles';
import {Loading} from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {useEffect} from 'react';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const styles = searchStyles(top);

  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');

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

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={styles.inputContainer}
      />

      <FlatList
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};
