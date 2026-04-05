import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemeText";
import Spacer from "../components/ThemedSpace";

import useUser from "../hooks/useUser";
import Logo from "../assets/LOGO.png";

export default function Home() {
  const { user } = useUser();
  console.log("Current user:", user);
  return (
    <ThemedView safe={true} style={[styles.container]}>
      <Image source={Logo} style={styles.logo} />
      <Spacer height={30} />
      <ThemedText title={true} style={{ fontSize: 24, fontWeight: "bold" }}>
        My home
      </ThemedText>
      <Spacer height={40} />
      <Link href={"/profile"} style={styles.link}>
        <ThemedText style={styles.link}>Profile</ThemedText>
      </Link>
      <Spacer height={40} />
      <ThemedView>
        <Link href={"/login"} style={styles.link}>
          <ThemedText style={styles.link}>Login</ThemedText>
        </Link>
        <Link href={"/register"} style={styles.link}>
          <ThemedText style={styles.link}>Register</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  link: {
    fontSize: 18,
    textDecorationLine: "underline",
    marginTop: 20,
  },
});
