import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';
import { Tab1 } from './Tab1';


const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#5856D6',
            tabBarLabelStyle: { 
                marginBottom: Platform.OS == 'ios' ? 0 : 10
            },
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.92)',
                borderWidth: 0,
                elevation: 0,
                height: Platform.OS == 'ios' ? 80 : 60
            }

        }}
    >
      <Tab.Screen 
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({} ) =>    <Icon color='#5856D6' size={20} name='list-outline' />
                }}
                name="HomeScreen" component={Tab1} />
      <Tab.Screen 
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({} ) =>    <Icon color='#5856D6' size={20} name='search-outline' />
                }}
                name="SearchSreen" component={Tab2Screen} />
    </Tab.Navigator>
  );
}