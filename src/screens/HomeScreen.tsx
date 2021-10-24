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

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPagination();
  const searchSty = searchStyles(top);

  // SearchUnput hooks
  const [term, setTerm] = useState('');
  const [isFinding, setIsFinding] = useState(false);
  const {isFetching, simplePokemon} = usePokemonSearch();
  // const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    console.log(isFetching);
isFetching ? setIsFinding(true) : setIsFinding(false);
  }, [isFetching]);

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={(styles.globalMargin, styles.pokebola)}
      />

      {isFinding && (
        <ActivityIndicator
          style={homeStyles.activityIndicator}
          size={50}
          color="grey"
        />
      )}

      <View style={(styles.globalMargin, homeStyles.container)}>
        <SearchInput
          onDebounce={value => setTerm(value)}
          style={searchSty.inputContainer}
        />

        <FlatList
          style={homeStyles.flatListContainer}
          data={simplePokemonList}
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
