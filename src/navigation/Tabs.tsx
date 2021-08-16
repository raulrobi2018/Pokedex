import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../screens/SearchScreen';
import {styles} from '../styles/tabsStyles';
import {Navigator} from './Navigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.container}
      tabBarOptions={{
        activeTintColor: 'red',
        labelStyle: styles.tabBarLabel,
        style: styles.tabs,
      }}>
      <Tab.Screen name="HomeScreen" component={Navigator} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
};
