import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "./src/contexts/themeContext";
import { TaskInput } from "./src/components/taskInput";
import { TaskItem } from "./src/components/taskItem";
import { FilterTabs } from "./src/components/filterTabs";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text> Task Manager </Text>
        <StatusBar style="auto" />
        <TaskInput onAddTask={() => {}} />
        <FilterTabs activeFilter="all" onFilterChange={() => {}}></FilterTabs>
        <TaskItem
          task={{
            id: "1",
            text: "lunch",
            priority: "high",
            completed: false,
            createdAt: new Date(),
          }}
          onToggleComplete={() => {}}
          onDelete={() => {}}
        />
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
