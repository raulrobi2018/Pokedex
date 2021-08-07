import React from 'react';
import {Image, FlatList, ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPagination} from '../hooks/usePokemonPagination';
import {styles} from '../styles/appStyles';
import {styles as homeStyles} from '../styles/homeStyles';
import {StyleSheet} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {PokemonCard} from '../components/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPagination();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={(styles.globalMargin, styles.pokebola)}
      />

      <View style={(styles.globalMargin, homeStyles.container)}>
        <FlatList
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
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
              }}>
              Pokedex
            </Text>
          }
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </>
  );
};
