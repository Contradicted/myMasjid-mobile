import { StyleSheet, Text, View, Image } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';

// Creating Tab Object
const Tab = createBottomTabNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    background: '#104022'
  }
}

export default function App() {

  return (
    <NavigationContainer theme={myTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#255535' }
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={
            {
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: () => { return <Image source={require('./assets/images/house.png')} /> }
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
