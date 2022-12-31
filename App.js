import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomeScreen from './pages/HomeScreen'
import NavigationBar from './components/NavigationBar';
import MyEventsScreen from './pages/MyEventsScreen';
import ChatScreen from './pages/ChatScreen';
import ProfileScreen from './pages/ProfileScreen';

const Stack = createNativeStackNavigator()

 const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen
          name="signup"
          component={SignUpPage}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{ title: "Log in to Party" }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "BENDER" }}
        />
        <Stack.Screen
          name="myevents"
          component={MyEventsScreen}
          options={{ title: "Events" }}
        />
        <Stack.Screen
          name="chats"
          component={ChatScreen}
          options={{ title: "Chats" }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
      </Stack.Navigator>
      <NavigationBar />
    </NavigationContainer>
  );
}

export default App