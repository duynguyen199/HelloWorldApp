import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <View style={styles.container}>
      {opened ? (
        <Text style={styles.title}>Fuck You</Text>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => setOpened(true)}>
          <Text style={styles.buttonText}>Open</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2563eb",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
