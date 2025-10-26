import { StyleSheet } from "react-native";
import { ThemeProvider } from "./src/contexts/themeContext";
import { TaskManagerScreen } from "./src/components/taskManager";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <TaskManagerScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
