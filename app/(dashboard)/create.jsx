import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'

const Create = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText title={true}>Create</ThemedText>
    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    }
})