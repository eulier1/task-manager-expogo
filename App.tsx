import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "./src/contexts/themeContext";
import { ThemeToggle } from "./src/components/themeToggle";
import { TaskManagerScreen } from "./src/components/taskManager";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
        <ThemeToggle></ThemeToggle>
        <TaskManagerScreen />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
