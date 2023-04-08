import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../SplashScreen';
import HomeScreen from '../HomeScreen';
import MusicDetails from '../MusicDetails';


const Stack = createNativeStackNavigator();

export const Routes = {
  SplashScreen: {
    name: 'SplashScreen',
    component: SplashScreen,
    options: { title: 'SplashScreen' },
  },

  HomeScreen: {
    name: 'HomeScreen',
    component: HomeScreen,
    options: { title: 'HomeScreen' },
  },

  MusicDetails: {
    name: "MusicDetails",
    component: MusicDetails,
    options: {title :"MusicDetails"},
  }

};

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      {Object.values(Routes).map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;
