import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { PriorityChipProps } from "@/src/types";
import { useTheme } from "@/src/contexts/themeContext";
import { getPriorityColor, getPriorityLabel } from "@/src/utils";

export const PriorityChip: React.FC<PriorityChipProps> = ({
  priority,
  selected,
  onPress,
}) => {
  const { theme } = useTheme();
  const priorityColor = getPriorityColor(priority, theme.colors);
  const label = getPriorityLabel(priority);

  return (
    <TouchableOpacity
      style={[
        styles.chip,
        {
          backgroundColor: priorityColor,
          opacity: selected ? 1 : 0.4,
          borderWidth: selected ? 2 : 0,
          borderColor: selected ? theme.colors.warning : "transparent",
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Radio Button Indicator */}
      <View style={[styles.radioOuter, { borderColor: theme.colors.surface }]}>
        {selected && (
          <View
            style={[styles.radioInner, { backgroundColor: priorityColor }]}
          />
        )}
      </View>

      {/* Priority Label */}
      <Text style={[styles.label, { color: theme.colors.surface }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 13,
    marginHorizontal: 4,
  },
  radioOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: "bold",
  },
});
