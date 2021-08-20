import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles as searchStyles} from '../styles/searchStyles';

export const Loading = () => {
  const {top} = useSafeAreaInsets();
  const styles = searchStyles(top);

  return (
    <View style={styles.activityIndicatorContainer}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Cargando...</Text>
    </View>
  );
};
