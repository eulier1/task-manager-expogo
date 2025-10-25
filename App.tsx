import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PriorityChip } from "./src/components/priorityChip";
import { ThemeProvider } from "./src/contexts/themeContext";
import { TaskInput } from "./src/components/taskInput";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text> Task Manager </Text>
        <StatusBar style="auto" />
        <TaskInput onAddTask={() => {}} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
