import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedText from '../../components/ThemeText'
import ThemedView from '../../components/ThemedView'

const Profile = () => {
  return (
    <ThemedView safe= {true} style={styles.container}>
      <ThemedText title={true}>Profile</ThemedText>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center', 
    }
})