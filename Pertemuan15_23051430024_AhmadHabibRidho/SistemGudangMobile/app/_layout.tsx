import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      {/* Mengatur navigasi utama ke folder (tabs) */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>

      {/* StatusBar Global */}
      <StatusBar style="auto" />
    </>
  );
}
