import { Text, SafeAreaView, Pressable, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'



const SignUpPage = ()=> {

    const name = 'name'
    const [newUser, setNewUser] = useState({})
    const { control, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{
            name: '',
            email: '',
            phone: '',
            password:''
        }
    })



    const onSubmit = (data)=>{
        setNewUser(data)
        const sendData = async() =>{
            await fetch('http://10.0.2.2:5050/users', {
                method: "POST",
                headers: {
                    "Content-Type": "applicaiton/json"
                },
                body: JSON.stringify(newUser)
            })
        }
        sendData()
    }

return (
    <SafeAreaView>
        <Text>Enter your first name</Text>
        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name='name'
        />
        <Text>Enter your email</Text>
        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name='email'
        />
        <Text>Enter your phone</Text>
        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name='phone'
        />
        <Text>Enter your password</Text>
        <Controller control={control} rules={{required: true}} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name='password'
        />

    <Button title="SIGN UP" onPress={handleSubmit(onSubmit)} />

</SafeAreaView>
)

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