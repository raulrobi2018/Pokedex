import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './src/navigation/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
