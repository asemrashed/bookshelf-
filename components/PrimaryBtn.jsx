import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import { useColorScheme } from 'react-native'

const PrimaryBtn = ({style, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Pressable 
        style={({prassed})=> [styles.btn, prassed && styles.pressed, style]}
        {...props}
    />
  )
}

export default PrimaryBtn

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  pressed: {
    backgroundColor: Colors.secondary,
  }
})