import { Text, SafeAreaView, Pressable, TextInput, Button, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import styles from '../styles'


const LoginPage = ({ navigation }) => {
  const name = "name";
  const [user, setUser] = useState({});
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

  const onSubmit = (data) => {
    setUser(data);
    // const sendData = async () => {
    //   await axios.post("http://172.29.128.1:5050/users", data);
    // };
    // sendData();
    console.log(data);
    if (isDirty) {
      setValue("email", "");
      setValue("password", "");
    }
    navigation.navigate("home");
    // navigation.replace('home')
  };

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
