import { Text, useColorScheme, ew, ActivityIndicator } from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";
import ThemedView from "./ThemedView";

const ThemedLoader = ({style, title= false, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return(
    <ThemedView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <ActivityIndicator size={'large'} color={theme.text}/>
    </ThemedView>
  );
};

export default ThemedLoader;
