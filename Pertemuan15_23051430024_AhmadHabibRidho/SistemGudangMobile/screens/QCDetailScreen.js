import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { QCContext } from "../context/QCContext";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // <-- Import Vector Icons

function QCDetailScreen({ route, navigation }) {
  const { itemData } = route.params;
  const { updateItemStatus } = useContext(QCContext);
  const [selectedImage, setSelectedImage] = useState(
    itemData.fotoBeneran || null
  );

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Izin Ditolak", "Aplikasi butuh izin akses galeri!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setSelectedImage(imageUri);
    }
  };

  const handleSetStatus = (statusValue) => {
    updateItemStatus(itemData.id, statusValue);

    Alert.alert("Inspeksi Selesai", `Item ditandai sebagai: ${statusValue}`, [
      {
        text: "OK",
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagePlaceholder} onPress={pickImage}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.imageResult} />
        ) : (
          <View style={styles.imageInside}>
            {/* VECTOR ICON SEMENTARA SEBELUM USER PILIH FOTO REAL */}
            <MaterialCommunityIcons
              name={itemData.foto}
              size={50}
              color="#7f8c8d"
            />
            <Text style={styles.imageText}>
              Klik untuk Ambil Foto Nyata dari Galeri
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.label}>Nama Item:</Text>
        <Text style={styles.value}>{itemData.nama}</Text>

        <Text style={styles.label}>Standar Kualitas QC:</Text>
        <Text style={styles.standarValue}>{itemData.standar}</Text>

        <Text style={styles.label}>Status Saat Ini:</Text>
        <Text style={styles.value}>{itemData.status}</Text>
      </View>

      <Text style={styles.actionLabel}>Pilih Status Inspeksi Baru:</Text>

      <View style={styles.buttonRow}>
        <View style={styles.btn}>
          <Button
            title="👍 LOLOS"
            color="#2ecc71"
            onPress={() => handleSetStatus("Lolos")}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="👎 GAGAL"
            color="#e74c3c"
            onPress={() => handleSetStatus("Gagal")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f6fa" },
  imagePlaceholder: {
    height: 180,
    backgroundColor: "#eaeded",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderStyle: "dashed",
  },
  imageInside: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageResult: { width: "100%", height: "100%", resizeMode: "cover" },
  imageText: {
    color: "#7f8c8d",
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 25,
  },
  label: { fontSize: 14, color: "#7f8c8d", marginTop: 10 },
  value: { fontSize: 18, fontWeight: "bold", color: "#2c3e50" },
  standarValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2980b9",
    marginTop: 2,
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  btn: { flex: 1, marginHorizontal: 5 },
});

export default QCDetailScreen;
