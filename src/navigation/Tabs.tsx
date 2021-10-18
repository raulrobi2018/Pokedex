import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from '../styles/tabsStyles';
import {HomeTab} from './HomeTab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SearchTab} from './SearchTab';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarLabel,
        tabBarActiveTintColor: 'gray',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Pokemon Album"
        component={HomeTab}
        options={{
          tabBarLabel: 'Listar',
          tabBarIcon: () => <Icon color="white" size={35} name="list" />,
          tabBarLabelStyle: styles.tabs,
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'rgba(247, 27, 27, 1)',
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          // tabBarLabel: 'Buscar',
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon color="white" size={35} name="search" />,
          tabBarLabelStyle: styles.tabs,
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'rgba(247, 27, 27, 1)',
        }}
      />
    </Tab.Navigator>
  );
};
