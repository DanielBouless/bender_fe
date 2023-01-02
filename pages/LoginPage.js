import { Text, SafeAreaView, Pressable, TextInput, Button, View } from 'react-native'
import AsyncStorage  from "@react-native-async-storage/async-storage";
import React, { useState, useContext, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import styles from '../styles'
import { CurrentUser } from '../context/CurrentUser'

const LoginPage = ({ navigation }) => {

    const { currentUser, setCurrentUser } = useContext(CurrentUser);
    const [errorMessage, setErrorMessage] = useState(null);
    const [ credentials, setCredentials ] = useState({
      email: "",
      password: "",
    })
//Form Config
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { isDirty, errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  register("email");
  register("password");



  
  
  //On login Submit
  const onSubmit = (data) => {
    console.log(data)
    const sendData = async () => {
      console.log(`Data sent: ${JSON.stringify(data)}`);
        const response = await fetch("http://172.29.128.1:5050/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }); 
        const userData = await response.json()
        console.log(`user Data ${userData.user.userId}`);
        if (response.status === 200) {
          setCurrentUser(userData.user.userId);
          AsyncStorage.setItem("token", userData.token);
          navigation.navigate("home");
        } else {
          if (isDirty) {
            setValue("email", "");
            setValue("password", "");
          }
          navigation.navigate('login')
        }

        // navigation.replace('home')
      };
      sendData();
}

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.card}>
        <Text style={styles.text}>Enter your email</Text>
        <View style={styles.input}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.background}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
              />
            )}
            name="email"
          />
        </View>
        <Text style={styles.text}>Enter your password</Text>
        <View style={styles.input}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.background}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Password"
              />
            )}
            name="password"
          />
        </View>
        <Button title="LOG IN" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};


export default LoginPage 
