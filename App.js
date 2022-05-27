import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/includes/Home_screen/Home'
import Single_profile from './src/includes/Home_screen/Single_profile'
import Blog from './src/includes/Home_screen/Blog'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/includes/Login_Screen/Login'
import Stories from './src/includes/story/Stories'

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Log" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Prof" component={Single_profile} />
        <Stack.Screen name="Blogg" component={Blog} />
        <Stack.Screen name="storr" component={Stories} />


      </Stack.Navigator>
    </NavigationContainer>


  )
}

export default App

const styles = StyleSheet.create({})