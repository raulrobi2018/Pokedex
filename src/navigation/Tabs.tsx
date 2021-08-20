import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from '../styles/tabsStyles';
import {HomeTab} from './HomeTab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SearchTab} from './SearchTab';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarLabel,
        tabBarActiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Listar',
          tabBarIcon: () => (
            <Icon color="rgba(230, 138, 0, 0.7)" size={35} name="list" />
          ),
          tabBarLabelStyle: styles.tabs,
          tabBarActiveTintColor: '#e68a00',
          tabBarActiveBackgroundColor: '#fff5e6',
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: () => (
            <Icon color="rgba(230, 138, 0, 0.7)" size={35} name="search" />
          ),
          tabBarLabelStyle: styles.tabs,
          headerShown: false,
          tabBarActiveTintColor: '#e68a00',
          tabBarActiveBackgroundColor: '#fff5e6',
        }}
      />
    </Tab.Navigator>
  );
};
