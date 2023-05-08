import { StyleSheet, Text, View, Image } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login'
import Register from './screens/Register';
import Profile from './screens/Profile'
import Timetable from './screens/Timetable'

import { useEffect, useState } from 'react';

import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import Ionicons from 'react-native-vector-icons/Ionicons';

// Creating Tab Object
const Tab = createBottomTabNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    background: '#104022'
  }
}

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  })

  return (
    <NavigationContainer theme={myTheme}>
      {isLoggedIn ? (
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: '#255535' },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              }

              if (route.name === 'Timetable') {
                iconName = focused
                  ? 'ios-calendar'
                  : 'ios-calendar-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
              }

              if (route.name === 'Profile') {
                iconName = focused
                  ? 'person'
                  : 'person-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'person' : 'person-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={30} color={color} />;
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#104022',
          })}>
          <Tab.Screen
            name='Timetable'
            component={Timetable}
            options={
              {
                headerShown: false,
                tabBarShowLabel: false,
                // tabBarIcon: () => { return <Image source={require('./assets/images/house.png')} /> }
              }}
          />
          <Tab.Screen
            name='Home'
            component={Home}
            options={
              {
                headerShown: false,
                tabBarShowLabel: false,
                // tabBarIcon: () => { return <Image source={require('./assets/images/house.png')} /> }
              }}
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
            options={
              {
                headerShown: false,
                tabBarShowLabel: false,
              }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        </Stack.Navigator>
      )}

      {/* Make the Status Bar light so its easier to read */}
      <StatusBar style='light' />
    </NavigationContainer>
  );
}
