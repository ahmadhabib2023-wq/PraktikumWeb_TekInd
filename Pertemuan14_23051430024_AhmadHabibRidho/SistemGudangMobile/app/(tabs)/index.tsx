import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard Mesin Industri</Text>

        <Text style={styles.headerSubtitle}>Monitoring Mesin Produksi</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Mesin 1 */}
          <View style={styles.machineCard}>
            {/* Foto Mesin */}
            <Image
              source={require("../../assets/images/CNC.jpeg")}
              style={styles.machineImage}
            />

            {/* Informasi Mesin */}
            <View style={styles.machineInfo}>
              <Text style={styles.machineTitle}>CNC Milling Machine</Text>

              <Text style={styles.machineText}>Tahun: 2021</Text>

              <Text style={styles.machineStatus}>Status: Running</Text>
            </View>
          </View>

          {/* Mesin 2 */}
          <View style={styles.machineCard}>
            <Image
              source={require("../../assets/images/WRA.jpeg")}
              style={styles.machineImage}
            />

            <View style={styles.machineInfo}>
              <Text style={styles.machineTitle}>Welding Robot Arm</Text>

              <Text style={styles.machineText}>Tahun: 2020</Text>

              <Text style={styles.machineStatusWarning}>
                Status: Maintenance
              </Text>
            </View>
          </View>

          {/* Mesin 3 */}
          <View style={styles.machineCard}>
            <Image
              source={require("../../assets/images/hp.jpeg")}
              style={styles.machineImage}
            />

            <View style={styles.machineInfo}>
              <Text style={styles.machineTitle}>Hydraulic Press</Text>

              <Text style={styles.machineText}>Tahun: 2019</Text>

              <Text style={styles.machineStatus}>Status: Active</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  header: {
    backgroundColor: "#1f2937",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
  },

  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#d1d5db",
    fontSize: 14,
    marginTop: 4,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  /* Card Mesin */
  machineCard: {
    flexDirection: "row",

    backgroundColor: "white",

    borderRadius: 15,

    padding: 15,

    marginBottom: 18,

    alignItems: "center",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.2,

    shadowRadius: 4,

    elevation: 5,
  },

  /* Foto Mesin */
  machineImage: {
    width: 90,
    height: 90,

    borderRadius: 12,

    marginRight: 15,
  },

  /* Info Mesin */
  machineInfo: {
    flex: 1,
  },

  machineTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#111827",
  },

  machineText: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 4,
  },

  machineStatus: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#16a34a",
  },

  machineStatusWarning: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#dc2626",
  },
});
