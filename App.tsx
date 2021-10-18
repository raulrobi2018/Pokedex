import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './src/navigation/Tabs';
import {HomeTab} from './src/navigation/HomeTab';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      {/* <Tabs /> */}
      <HomeTab />
    </NavigationContainer>
  );
};

export default App;
