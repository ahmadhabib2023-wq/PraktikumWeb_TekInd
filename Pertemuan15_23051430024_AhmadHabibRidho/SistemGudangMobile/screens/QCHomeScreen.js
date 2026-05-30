import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { QCContext } from "../context/QCContext";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // <-- Import Vector Icons

function QCHomeScreen({ navigation }) {
  const { items } = useContext(QCContext);

  const renderItem = ({ item }) => {
    const isFailed = item.status === "Gagal";
    const statusColor =
      item.status === "Lolos" ? "#2ecc71" : isFailed ? "#e74c3c" : "#7f8c8d";

    return (
      <TouchableOpacity
        style={styles.itemCard}
        onPress={() => navigation.navigate("QCDetail", { itemData: item })}
      >
        <View style={styles.row}>
          {/* MENGGUNAKAN VECTOR ICON YANG BAGUS */}
          <View style={styles.iconWrapper}>
            <MaterialCommunityIcons
              name={item.foto}
              size={32}
              color="#34495e"
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.itemName, isFailed && styles.textRed]}>
              {item.nama}
            </Text>
            <Text style={[styles.statusText, { color: statusColor }]}>
              Status: {item.status}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Item Perlu Inspeksi</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f6fa", padding: 15 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2c3e50",
  },
  itemCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  row: { flexDirection: "row", alignItems: "center" },
  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  infoContainer: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: "bold", color: "#2c3e50" },
  statusText: { fontSize: 14, marginTop: 4, fontWeight: "600" },
  textRed: { color: "#e74c3c" },
});

export default QCHomeScreen;
