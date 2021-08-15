import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {FullPokemon} from '../interfaces/pokemonInterfaces';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);

  //Recibimos un objeto vacío para asegurarnos que si queremos leer algún atributo no nos de error
  //Declarandolo de esta forma, nos devolverá undefined
  const [pokemon, setPokemon] = useState<FullPokemon>({} as FullPokemon);

  const loadPokemon = async () => {
    const resp = await pokemonApi.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };

  //Cuando se carga por primera vez, necesito traer el pokemon y lo hago con este useEffect
  useEffect(() => {
    loadPokemon();
  }, []);

  return {isLoading, pokemon};
};
