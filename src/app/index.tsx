import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

/**
 * Home screen displayed when the application starts.
 * This screen introduces the Daily Task Planner and
 * allows the user to navigate to the Tasks screen.
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Application icon */}
      <Text style={styles.emoji}>📋</Text>

      {/* Main application title */}
      <Text style={styles.title}>
        Daily Task Planner
      </Text>

      {/* Brief description of the application */}
      <Text style={styles.subtitle}>
        Stay organised by adding and managing your daily tasks.
      </Text>

      {/* Displays the application's key features */}
      <View style={styles.featureBox}>

        <Text style={styles.feature}>✅ Add new tasks</Text>

        <Text style={styles.feature}>✅ Delete completed tasks</Text>

        <Text style={styles.feature}>✅ Stay organised every day</Text>

      </View>

      {/* Navigates the user to the Tasks screen */}
      <Pressable
        style={styles.button}
        onPress={() => router.push("/tasks")}
      >
        <Text style={styles.buttonText}>
          View My Tasks
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  // Main container for the Home screen
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F8FB",
    padding: 25,
  },

  // Displays the clipboard emoji at the top of the screen
  emoji: {
    fontSize: 70,
    marginBottom: 10,
  },

  // Styles the main heading
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#1E3A5F",
  },

  // Styles the introductory text
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#555",
    marginBottom: 35,
  },

  // Container for the list of application features
  featureBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 35,
    elevation: 3,
  },

  // Styles each feature displayed to the user
  feature: {
    fontSize: 18,
    marginBottom: 12,
  },

  // Styles the navigation button
  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: 16,
    paddingHorizontal: 45,
    borderRadius: 10,
  },

  // Styles the button text
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

});