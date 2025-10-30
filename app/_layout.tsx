import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={globalStyles.background}
        edges={["bottom", "left", "right"]}
      >
        <Slot />
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
