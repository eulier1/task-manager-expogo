import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "./src/contexts/themeContext";
import { TaskInput } from "./src/components/taskInput";
import { TaskItem } from "./src/components/taskItem";
import { FilterTabs } from "./src/components/filterTabs";
import { PriorityFilter } from "./src/components/priorityFilter";
import { TaskCounter } from "./src/components/taskCounter";
import { ThemeToggle } from "./src/components/themeToggel";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text> Task Manager </Text>
        <ThemeToggle></ThemeToggle>
        <StatusBar style="auto" />
        <TaskInput onAddTask={() => {}} />
        <FilterTabs activeFilter="all" onFilterChange={() => {}}></FilterTabs>
        <PriorityFilter
          activePriority="all"
          onPriorityChange={() => {}}
        ></PriorityFilter>
        <TaskCounter pendingCount={5} totalCount={10}></TaskCounter>
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
