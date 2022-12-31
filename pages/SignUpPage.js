import { Text, SafeAreaView, Pressable, TextInput, Button, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import styles from "../styles";


const SignUpPage = ({navigation})=> {

    const name = 'name'
    const [newUser, setNewUser] = useState({})
    const {
      control,
      handleSubmit,
      register,
      setValue,
      formState: { isDirty, errors },
    } = useForm({
      defaultValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    });

register('firstname')
register('lastname');
register('email')
register('password')

    const onSubmit = (data)=>{
      setNewUser(data)
        const sendData = async() =>{
            await axios.post('http://172.29.128.1:5050/users', data)
        }
        sendData()
        console.log(data)       
        if(isDirty){
            setValue('firstname','')
            setValue("lastname", "");
            setValue('email','')
            setValue('password','')
        }
        // navigation.replace('login')
          navigation.navigate("login");
    }

return (
  <SafeAreaView style={styles.app}>
    <View style={styles.card}>
      <Text >Enter your first name</Text>
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
              placeholder="First Name"
            />
          )}
          name="firstname"
        />
      </View>
      <Text>Enter your last name</Text>
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
              placeholder="Last Name"
            />
          )}
          name="lastname"
        />
      </View>
      <Text>Enter your email</Text>
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
        <Text>Enter your password</Text>
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
      <Button title="SIGN UP" onPress={handleSubmit(onSubmit)} />
    </View>
  </SafeAreaView>
);

}

export default SignUpPage 








/**
 * 
 * 
 * 
 * 
 * 
 * GOALS FOR SIGNUP PAGE
 * 
 * On App load, if currentUser === null then redirect to this page.
 * 
 * create a simple signup form aka name, email, phone and password for now.
 * 
 * once the user hits the submit button, the front end will send the newUser information to the database via fetch to backend
 * 
 */