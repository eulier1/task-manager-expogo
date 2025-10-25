import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@/src/contexts/themeContext";

interface TaskCounterProps {
  pendingCount: number;
  totalCount: number;
}

export const TaskCounter: React.FC<TaskCounterProps> = ({
  pendingCount,
  totalCount,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.colors.textSecondary }]}>
        TASKS
      </Text>
      <View style={[styles.badge, { backgroundColor: theme.colors.error }]}>
        <Text style={styles.badgeText}>
          {pendingCount}/{totalCount} pending task
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 11,
    marginLeft: 8,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },
});
