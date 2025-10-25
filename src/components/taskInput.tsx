import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { useTheme } from "@/src/contexts/themeContext";
import { TaskInputProps, Priority } from "@/src/types";
import { PriorityChip } from "@/src/components/priorityChip";

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const { theme } = useTheme();
  const [text, setText] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<Priority>("medium");

  const handleAddTask = () => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      Alert.alert("Empty Task", "Please enter a task description");
      return;
    }

    onAddTask(trimmedText, selectedPriority);

    setText("");
    setSelectedPriority("medium");
  };

  const priorities: Priority[] = ["high", "medium", "low"];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      {/* Label */}
      <Text style={[styles.label, { color: theme.colors.textSecondary }]}>
        ADD NEW TASK
      </Text>

      {/* Text Input */}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.border,
            color: theme.colors.text,
          },
        ]}
        placeholder="Enter task..."
        placeholderTextColor={theme.colors.textSecondary}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAddTask}
        returnKeyType="done"
      />

      {/* Priority Selector Row */}
      <View style={styles.priorityRow}>
        <Text
          style={[styles.priorityLabel, { color: theme.colors.textSecondary }]}
        >
          PRIORITY
        </Text>

        {/* Priority Chips */}
        <View style={styles.chipsContainer}>
          {priorities.map((priority) => (
            <PriorityChip
              key={priority}
              priority={priority}
              selected={selectedPriority === priority}
              onPress={() => setSelectedPriority(priority)}
            />
          ))}
        </View>

        {/* Add Button */}
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: theme.colors.primary }]}
          onPress={handleAddTask}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 16,
    width: "100%",
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    borderWidth: 1,
  },
  priorityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  priorityLabel: {
    fontSize: 10,
    fontWeight: "600",
    marginRight: 8,
  },
  chipsContainer: {
    flexDirection: "row",
    flex: 1,
  },
  addButton: {
    width: 36,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});
