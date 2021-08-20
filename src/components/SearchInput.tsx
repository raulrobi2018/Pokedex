import React, {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles as searchStyles} from '../styles/searchStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp} from 'react-native';
import {useDebounce} from '../hooks/useDebounce';
import {useEffect} from 'react';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}

//El style recibido aquí no se utiliza porque yo lo hice con
//styles en archivos aparte
export const SearchInput = ({style, onDebounce}: Props) => {
  const {top} = useSafeAreaInsets();

  const styles = searchStyles(top);

  const [textValue, setTextValue] = useState('');

  const debeouncedValue = useDebounce(textValue);

  useEffect(() => {
    onDebounce(debeouncedValue);
  }, [debeouncedValue]);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Buscar"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon color="gray" size={30} name="search" />
      </View>
    </View>
  );
};
