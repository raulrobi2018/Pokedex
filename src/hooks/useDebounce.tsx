import {useState} from 'react';
import {useEffect} from 'react';

export const useDebounce = (input: string = '', time: number = 500) => {
  const [debounceValue, setDebounceValue] = useState(input);

  //Se disparará cada vez que se escriba en el input text
  useEffect(() => {
    //Guardo el valor del timeout en esta variable
    const timeout = setTimeout(() => {
      setDebounceValue(input);
    }, time);

    //Limpia el setTimeout anterior
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debounceValue;
};
