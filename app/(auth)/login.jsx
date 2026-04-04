import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import Spacer from '../../components/ThemedSpace'
import { Link } from 'expo-router'
import PrimaryBtn from '../../components/PrimaryBtn'
import ThemedInput from '../../components/ThemedInput'
import useUser from '../../hooks/useUser'

const Login = () => {
  const { user } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    console.log("Current User", user);
    console.log("Button Pressed", email, password);
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true}>Login</ThemedText>
      <Spacer height={40}/>
      <ThemedInput 
        style={{width: '80%'}}
        value={email}
        onChangeText={setEmail}
        textContentType='emailAddress'
        placeholder='Email' 
        keyboardType='email-address' 
        autoCapitalize='none'
      />
      <Spacer height={20}/>
      <ThemedInput 
        style={{width: '80%'}}
        value={password}
        onChangeText={setPassword}
        placeholder='Password' 
        secureTextEntry 
      />
      <Spacer height={30}/>
      <PrimaryBtn onPress={handleSubmit}>
        <Text>Login</Text>
      </PrimaryBtn>
      <Spacer height={40}/>
      <ThemedText style={{textAlign:'center'}}>Don't have an account? 
        <Link href={'/register'} style={{ color: 'blue' }}> Register</Link>
      </ThemedText>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})