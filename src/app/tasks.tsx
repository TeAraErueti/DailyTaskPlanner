import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Key used to store tasks on the device
const STORAGE_KEY = "daily_tasks";

/**
 * Tasks screen where users can add, view and delete
 * daily tasks.
 */
export default function TaskScreen() {
  // Stores the task currently being typed by the user
  const [task, setTask] = useState("");

  // Stores all tasks entered by the user
  const [tasks, setTasks] = useState<string[]>([]);

  // Calculates the total number of tasks
  const totalTasks = tasks.length;

  /**
   * Loads saved tasks from local storage
   * when the application starts.
   */
  useEffect(() => {
    loadTasks();
  }, []);

  /**
   * Saves the task list whenever it changes.
   */
  useEffect(() => {
    saveTasks();
  }, [tasks]);

  /**
   * Saves tasks to AsyncStorage.
   */
  async function saveTasks() {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      console.log("Saved tasks:", tasks);
    } catch (error) {
      console.log("Error saving tasks:", error);
    }
  }

  /**
   * Loads tasks from AsyncStorage.
   */
  async function loadTasks() {
    try {
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);

      console.log("Loaded:", storedTasks);
      
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.log("Error loading tasks:", error);
    }
  }

  /**
   * Adds a new task to the task list.
   * Prevents empty tasks from being added.
   */
  function addTask() {
    if (task.trim() === "") {
      Alert.alert("Missing Task", "Please enter a task before adding it.");
      return;
    }

    // Add the task to the array
    setTasks([...tasks, task.trim()]);

    // Clear the text box
    setTask("");
  }

  /**
   * Deletes a selected task after asking
   * the user to confirm the action.
   */
  function deleteTask(indexToDelete: number) {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",

          onPress: () => {
            // Create a new list without the selected task
            const updatedTasks = tasks.filter(
              (_, index) => index !== indexToDelete
            );

            // Update the task list
            setTasks(updatedTasks);
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      {/* Screen heading */}
      <Text style={styles.title}>📝 My Tasks</Text>

      {/* Brief instructions for the user */}
      <Text style={styles.subtitle}>
        Stay organised by adding your daily tasks.
      </Text>

      {/* Displays the current number of tasks */}
      <Text style={styles.counter}>Total Tasks: {totalTasks}</Text>

      {/* Text input for entering a new task */}
      <TextInput
        style={styles.input}
        placeholder="Enter a new task..."
        value={task}
        onChangeText={setTask}
      />

      {/* Button used to add a task */}
      <Pressable style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>

      {/* Display a message when no tasks have been added */}
      {tasks.length === 0 ? (
        <Text style={styles.emptyMessage}>
          No tasks yet.
          {"\n\n"}
          Add your first task above.
        </Text>
      ) : (
        // Display each task in the task list
        tasks.map((item, index) => (
          <View key={index} style={styles.taskRow}>
            <Text style={styles.task}>• {item}</Text>

            {/* Delete button */}
            <Pressable
              style={styles.deleteButton}
              onPress={() => deleteTask(index)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Main screen container
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    padding: 20,
  },

  // Screen title
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E3A5F",
    marginTop: 20,
  },

  // Introductory text
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginTop: 10,
    marginBottom: 10,
  },

  // Task counter
  counter: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    color: "#1E3A5F",
    marginBottom: 20,
  },

  // Text input box
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginBottom: 15,
  },

  // Add Task button
  button: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
  },

  // Button text
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  // Message shown when there are no tasks
  emptyMessage: {
    textAlign: "center",
    fontSize: 18,
    color: "#777777",
    marginTop: 60,
    lineHeight: 28,
  },

  // Individual task row
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  // Task text
  task: {
    fontSize: 18,
    flex: 1,
  },

  // Delete button
  deleteButton: {
    backgroundColor: "#D32F2F",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 15,
  },

  // Delete button text
  deleteText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});