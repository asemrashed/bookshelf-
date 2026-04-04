import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import Spacer from '../../components/ThemedSpace'
import { Link } from 'expo-router'
import PrimaryBtn from '../../components/PrimaryBtn'

const Register = () => {
  const handleSubmit = () => {
    console.log("Register Button Pressed");
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true}>Register</ThemedText>
      <Spacer height={40}/>
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