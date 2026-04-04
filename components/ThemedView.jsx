import { useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const ThemedView = ({style, safe = false, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const insets = useSafeAreaInsets();
  
  if(!safe) return(
  <View 
    style={[{backgroundColor: theme.bg}, style]} {...props}
  />
  );

  return (
    <View
      style={[{
        backgroundColor: theme.bg,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }, style]} {...props}
    />
  )
};

export default ThemedView;
