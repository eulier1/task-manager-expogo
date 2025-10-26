import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/themeContext";
import { HeaderProps } from "@/src/types";

export const Header: React.FC<HeaderProps> = ({
  title,
  rightIcon,
  onRightIconPress,
  leftIcon,
  onLeftIconPress,
  backgroundColor,
  titleColor,
  elevation = 2,
  style,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor || theme.colors.surface,
          elevation,
          shadowColor: "hsla(0, 0%, 0%, 1)",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        style,
      ]}
    >
      {/* Left Icon */}
      <View style={styles.leftContainer}>
        {leftIcon && (
          <TouchableOpacity
            onPress={onLeftIconPress}
            style={styles.iconButton}
            activeOpacity={0.7}
          >
            {leftIcon}
          </TouchableOpacity>
        )}
      </View>

      {/* Title */}
      <View style={styles.centerContainer}>
        <Text
          style={[styles.title, { color: titleColor || theme.colors.text }]}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      {/* Right Icon */}
      <View style={styles.rightContainer}>
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.iconButton}
            activeOpacity={0.7}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    paddingHorizontal: 16,
  },
  leftContainer: {
    width: 40,
    alignItems: "flex-start",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    width: 40,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
