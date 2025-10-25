import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "@/src/contexts/themeContext";
import { FilterTabsProps, FilterStatus } from "@/src/types";

export const FilterTabs: React.FC<FilterTabsProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const { theme } = useTheme();

  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: "All" },
    { value: "completed", label: "Completed" },
    { value: "pending", label: "Pending" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;
        return (
          <TouchableOpacity
            key={filter.value}
            style={[
              styles.tab,
              {
                backgroundColor: isActive
                  ? theme.colors.primary
                  : theme.colors.card,
              },
            ]}
            onPress={() => onFilterChange(filter.value)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: isActive ? "#FFFFFF" : theme.colors.textSecondary,
                  fontWeight: isActive ? "bold" : "normal",
                },
              ]}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    justifyContent: "space-between",
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
  },
});
