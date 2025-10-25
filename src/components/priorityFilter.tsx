import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "@/src/contexts/themeContext";
import { PriorityFilterProps, Priority } from "../types";

export const PriorityFilter: React.FC<PriorityFilterProps> = ({
  activePriority,
  onPriorityChange,
}) => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const priorities: { value: Priority | "all"; label: string }[] = [
    { value: "all", label: "All Priorities" },
    { value: "high", label: "High Priority" },
    { value: "medium", label: "Medium Priority" },
    { value: "low", label: "Low Priority" },
  ];

  const activeLabel =
    priorities.find((p) => p.value === activePriority)?.label ||
    "All Priorities";

  const handleSelect = (priority: Priority | "all") => {
    onPriorityChange(priority);
    setModalVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <Text style={[styles.label, { color: theme.colors.text }]}>
        Priority:
      </Text>

      {/* Dropdown Button */}
      <TouchableOpacity
        style={[
          styles.dropdown,
          {
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
          },
        ]}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <Text
          style={[styles.dropdownText, { color: theme.colors.textSecondary }]}
        >
          {activeLabel} ▼
        </Text>
      </TouchableOpacity>

      {/* Modal Dropdown */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.modalContent,
                  { backgroundColor: theme.colors.surface },
                ]}
              >
                {priorities.map((priority) => (
                  <TouchableOpacity
                    key={priority.value}
                    style={[
                      styles.option,
                      {
                        backgroundColor:
                          activePriority === priority.value
                            ? theme.colors.primary
                            : "transparent",
                      },
                    ]}
                    onPress={() => handleSelect(priority.value)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        {
                          color:
                            activePriority === priority.value
                              ? "#FFFFFF"
                              : theme.colors.text,
                          fontWeight:
                            activePriority === priority.value
                              ? "bold"
                              : "normal",
                        },
                      ]}
                    >
                      {priority.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    marginRight: 8,
  },
  dropdown: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
  },
  dropdownText: {
    fontSize: 11,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    borderRadius: 8,
    padding: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginVertical: 2,
  },
  optionText: {
    fontSize: 14,
  },
});
