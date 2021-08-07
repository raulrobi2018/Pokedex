import {useRef} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {
  PokemonPaginationResponse,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPagination = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const nextPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginationResponse>(
      nextPage.current,
    );

    //Asigna los siguientes regitros
    nextPage.current = resp.data.next;
    mapPokemonListToSimplePokemon(resp.data.results);
  };

  //Convertimos el resultado en nuestro SimplePokemon
  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
    setIsLoading(true);

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

    //Acumulamos los pokemones que ya pueda tener antes, más los nuevos
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {isLoading, simplePokemonList, loadPokemons};
};
