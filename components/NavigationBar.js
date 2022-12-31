import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, SafeAreaView, Text, TextInput, Pressable } from 'react-native'
import styles from '../styles'

const NavigationBar = () =>{

    const navigation = useNavigation()

const redirectHome = () =>{
    console.log('home button clicked')
     navigation.reset({
       index: 0,
       routes: [{ name: "home" }],
     });
}

const redirectMyEvents = ()=>{
    console.log('my events button clicked')
     navigation.reset({
       index: 0,
       routes: [{ name: "myevents" }],
     });
}

const redirectChat = () => {
  console.log("chat button clicked");
   navigation.reset({
     index: 0,
     routes: [{ name: "chats" }],
   });
};

const redirectProfile = () => {
  console.log("profile button clicked");
   navigation.reset({
     index: 0,
     routes: [{ name: "profile" }],
   });
};

    return (
      <SafeAreaView style={styles.navBarContainer}>
        <Pressable onPress={redirectHome}>
          <Text> Home</Text>
        </Pressable>
        <Pressable onPress={redirectMyEvents}>
          <Text> Events</Text>
        </Pressable>
        <Pressable onPress={redirectChat}>
          <Text> Chat</Text>
        </Pressable>
        <Pressable onPress={redirectProfile}>
          <Text> Profile</Text>
        </Pressable>
      </SafeAreaView>
    );
}


export default NavigationBar





