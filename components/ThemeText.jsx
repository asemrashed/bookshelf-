import { Text, useColorScheme, ew } from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";

const ThemedText = ({style, title= false, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const textType= title ? {color: theme.title} : {color: theme.text};
  const fontSize = title ? 24 : 16;
  return(
  <Text 
    style={[textType, {fontSize}, style]} {...props}
  />
  );
};

export default ThemedText;
