import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {pokemonApi} from '../api/pokemonApi';
import {FullPokemon, SimplePokemon} from '../interfaces/pokemonInterfaces';
import {
  PokemonPaginationResponse,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon>(undefined);

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginationResponse>(
      `http://pokeapi.co/api/v2/pokemon?limit=100`,
    );

    //Asigna los registros
    mapPokemonListToSimplePokemon(resp.data.results);
  };

  const findPokemon = async (nameOrId: string) => {
    try {
      setIsFetching(true);
      const resp = await pokemonApi.get<FullPokemon>(
        `http://pokeapi.co/api/v2/pokemon/${nameOrId}`,
      );

      if (resp) {
        //Asigna los registros
        mapFullPokemonToSimplePokemon(resp.data);
      }
    } catch (error) {
      ToastAndroid.showWithGravity(
        'The Pokemon does not exist',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };

  //Convertimos el resultado en nuestro SimplePokemon
  const mapFullPokemonToSimplePokemon = (pokemon: FullPokemon) => {
    const {id, name} = pokemon;

    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const newPokemon: SimplePokemon = {
      id: id + '',
      picture,
      name,
    };
    setSimplePokemon(newPokemon);
    setIsFetching(false);
  };

  //Convertimos el resultado en nuestro SimplePokemon
  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      //Separo en partes la url para extraer el id
      //https://pokeapi.co/api/v2/pokemon/1/
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        picture,
        name,
      };
    });

    //Acumulamos los pokemones que ya pueda tener antes, m??s los nuevos
    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  // useEffect(() => {
  //   loadPokemons();
  // }, []);

  return {isFetching, simplePokemonList, findPokemon, simplePokemon};
};
