import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@/src/contexts/themeContext";
import { TaskItemProps } from "../types";
import {
  getPriorityLabel,
  getPriorityColor,
  getRelativeTime,
} from "@/src/utils";

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onDelete,
}) => {
  const { theme } = useTheme();
  const priorityColor = getPriorityColor(task.priority, theme.colors);
  const priorityLabel = getPriorityLabel(task.priority);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
      {/* Checkbox */}
      <TouchableOpacity
        style={[
          styles.checkbox,
          {
            borderColor: theme.colors.primary,
            backgroundColor: task.completed
              ? theme.colors.primary
              : "transparent",
          },
        ]}
        onPress={() => onToggleComplete(task.id)}
        activeOpacity={0.7}
      >
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      {/* Task Content */}
      <View style={styles.content}>
        {/* Priority Badge and Task Text Row */}
        <View style={styles.topRow}>
          <View
            style={[styles.priorityBadge, { backgroundColor: priorityColor }]}
          >
            <Text style={styles.priorityText}>
              {priorityLabel.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* Task Text */}
        <Text
          style={[
            styles.taskText,
            {
              color: task.completed
                ? theme.colors.textSecondary
                : theme.colors.text,
              textDecorationLine: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.6 : 1,
            },
          ]}
          numberOfLines={2}
        >
          {task.text}
        </Text>

        {/* Timestamp */}
        <Text style={[styles.timestamp, { color: theme.colors.textSecondary }]}>
          Created {getRelativeTime(task.createdAt)}
        </Text>
      </View>

      {/* Delete Button */}
      <TouchableOpacity
        style={[styles.deleteButton, { backgroundColor: theme.colors.error }]}
        onPress={() => onDelete(task.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 6,
    minHeight: 70,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  priorityText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
  },
  taskText: {
    fontSize: 14,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 10,
  },
  deleteButton: {
    width: 24,
    height: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
