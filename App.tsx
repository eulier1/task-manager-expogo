import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PriorityChip } from "./src/components/priorityChip";
import { ThemeProvider } from "./src/contexts/themeContext";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text> Task Manager </Text>
        <StatusBar style="auto" />
        <PriorityChip priority="high" selected={true} onPress={() => {}} />
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
