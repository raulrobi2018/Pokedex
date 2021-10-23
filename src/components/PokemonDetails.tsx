import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FullPokemon} from '../interfaces/pokemonInterfaces';
import {
  styles as pokemonDetailsStyles,
  styles,
} from '../styles/pokemonDetailsStyles';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: FullPokemon;
  color: string;
}

export const PokemonDetails = ({pokemon, color}: Props) => {
  const styles = pokemonDetailsStyles(color);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.label}>Tipos</Text>
        <View style={styles.types}>
          {pokemon.types.map(({type}) => (
            <Text style={styles.text} key={type.name}>
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </Text>
          ))}
        </View>
        <Text style={styles.label}>Peso</Text>
        <Text style={styles.text}>{pokemon.weight}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Sprites</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.spriteItem}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.spriteItem}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.spriteItem}
          />
          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.spriteItem}
          />
        </ScrollView>

        {/* Habilidades */}
        <View style={styles.itemRow}>
          <Text style={styles.label}>Habilidades básicas</Text>
          <View style={styles.types}>
            {pokemon.abilities.map(({ability}) => (
              <Text style={styles.item} key={ability.name}>
                {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
              </Text>
            ))}
          </View>
        </View>

        {/* Movimientos */}
        <View style={styles.itemRow}>
          <Text style={styles.label}>Movimientos</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            {pokemon.moves.map(({move}) => (
              <Text style={styles.item} key={move.name}>
                {move.name.charAt(0).toUpperCase() + move.name.slice(1)}
              </Text>
            ))}
          </ScrollView>
        </View>

        {/* Movimientos */}
        <View style={styles.itemRow}>
          <Text style={styles.label}>Estadísticas</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {pokemon.stats.map(stat => (
              <View key={stat.stat.name}>
                <Text style={styles.item} key={stat.stat.name}>
                  {stat.stat.name.charAt(0).toUpperCase() +
                    stat.stat.name.slice(1)}{' '}
                  {stat.base_stat}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};
