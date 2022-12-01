import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';


const Stack = createNativeStackNavigator()

 const App=()=>{
  return (

<NavigationContainer>
  <Stack.Navigator initialRouteName="signup"> 
    <Stack.Screen name="signup" component={SignUpPage} options={{title: "Sign Up to Party"}}/>
    <Stack.Screen name="login" component={LoginPage} options={{title: "Log in to Party"}}/>
  </Stack.Navigator>
</NavigationContainer>

  );
}


export default App