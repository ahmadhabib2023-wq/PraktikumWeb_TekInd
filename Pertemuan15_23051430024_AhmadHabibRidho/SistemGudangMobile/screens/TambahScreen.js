import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

function TambahScreen({ navigation }) {
  // State untuk menampung inputan form
  const [namaBarang, setNamaBarang] = useState("");
  const [jumlahStok, setJumlahStok] = useState("");
  const [lokasiRak, setLokasiRak] = useState("");

  // Fungsi saat tombol Simpan Barang ditekan
  const handleSimpan = () => {
    // Validasi sederhana agar input tidak boleh kosong
    if (!namaBarang || !jumlahStok || !lokasiRak) {
      Alert.alert("Error", "Semua kolom form wajib diisi!");
      return;
    }

    // Menampilkan alert sukses dan kembali ke HomeScreen
    Alert.alert(
      "Sukses",
      `Barang "${namaBarang}" berhasil ditambahkan ke inventori!`,
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(), // Otomatis balik ke daftar gudang
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Form Tambah Barang Baru</Text>

      {/* Input Nama Barang */}
      <Text style={styles.label}>Nama Barang</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama barang (contoh: Mur Ring 14)"
        placeholderTextColor="#aaa" // <-- Membuat teks contoh menjadi abu-abu pudar
        value={namaBarang}
        onChangeText={setNamaBarang}
      />

      {/* Input Jumlah Stok */}
      <Text style={styles.label}>Jumlah Stok</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan jumlah stok (contoh: 150)"
        placeholderTextColor="#aaa" // <-- Membuat teks contoh menjadi abu-abu pudar
        keyboardType="numeric"
        value={jumlahStok}
        onChangeText={setJumlahStok}
      />

      {/* Input Lokasi Rak */}
      <Text style={styles.label}>Lokasi Penyimpanan</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan lokasi (contoh: Rak C-2)"
        placeholderTextColor="#aaa" // <-- Membuat teks contoh menjadi abu-abu pudar
        value={lokasiRak}
        onChangeText={setLokasiRak}
      />

      {/* Tombol Simpan */}
      <View style={styles.buttonContainer}>
        <Button title="Simpan Barang" color="#2ecc71" onPress={handleSimpan} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    color: "#333", // Warna teks utama saat user mengetik (tetap tegas)
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default TambahScreen;
