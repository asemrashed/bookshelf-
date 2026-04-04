import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import Spacer from '../../components/ThemedSpace'
import { Link } from 'expo-router'
import PrimaryBtn from '../../components/PrimaryBtn'
import ThemedInput from '../../components/ThemedInput'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = () => {
    console.log("Button Pressed", name, email, password);
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true}>Register</ThemedText>
      <Spacer height={40}/>
      <ThemedInput
        style={{width: '80%', marginBottom: 20}}
        value={name}
        onChangeText={setName}
        placeholder='Name' 
        autoCapitalize='none'
      />
      <ThemedInput
        style={{width: '80%', marginBottom: 20}}
        value={email}
        onChangeText={setEmail}
        textContentType='emailAddress'
        placeholder='Email' 
        keyboardType='email-address' 
        autoCapitalize='none'
      />
      <ThemedInput 
        style={{width: '80%'}}
        value={password}
        onChangeText={setPassword}
        placeholder='Password' 
        secureTextEntry 
      />
      <Spacer height={30}/>
      <PrimaryBtn onPress={handleSubmit}>
        <Text>Register</Text>
      </PrimaryBtn>
      <Spacer height={40}/>
      <ThemedText style={{textAlign:'center'}}>Already have an account? 
        <Link href={'/login'} style={{ color: 'blue' }}> Login</Link>
      </ThemedText>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})