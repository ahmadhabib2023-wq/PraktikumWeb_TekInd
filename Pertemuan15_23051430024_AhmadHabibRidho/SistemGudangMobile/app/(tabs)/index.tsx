import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens (Path naik 2 tingkat dari app/(tabs) ke root folder)
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import TambahScreen from "../../screens/TambahScreen"; // <-- Import TambahScreen baru

// Membuat Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer dihapus karena sudah ditangani secara otomatis oleh Expo Router
    <Stack.Navigator initialRouteName="Home">
      {/* Screen Utama */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Gudang Ind. v1.0" }}
      />

      {/* Screen Detail */}
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }: { route: any }) => ({
          title: route.params?.itemData?.nama || "Detail",
        })}
      />

      {/* Screen Tambah Barang Baru */}
      <Stack.Screen
        name="Tambah"
        component={TambahScreen}
        options={{ title: "Tambah Barang Baru" }} // <-- Judul header saat di halaman tambah
      />
    </Stack.Navigator>
  );
}
