import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../theme/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/UserContext";
import { BookProvider } from "../context/BookContext";

const Layout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <UserProvider>
      <BookProvider>
      <StatusBar value='auto' />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBg },
          headerTintColor: theme.text,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        <Stack.Screen name="(dashboard)" options={{headerShown: false}} />
      </Stack>
      </BookProvider>
    </UserProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
