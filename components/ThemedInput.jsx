import { TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const ThemedInput = ({style, ...props}) => {
    const theme = Colors[useColorScheme()] ?? Colors.light;

  return (
    <TextInput 
        style={{
            backgroundColor: theme.card,
            color: theme.text,
            padding: 15,
            borderRadius: 5,
            borderColor: Colors.primary,
            borderWidth: 1,
            ...style
        }}
        {...props}
    />
  )
}

export default ThemedInput