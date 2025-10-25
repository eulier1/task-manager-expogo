import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useTheme } from "@/src/contexts/themeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme.themeMode === "dark";

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      {isDark ? (
        // Moon Icon (Dark Mode)
        <View style={styles.iconContainer}>
          <View style={[styles.moon, { backgroundColor: "#FBBF24" }]} />
          <View
            style={[
              styles.moonCover,
              { backgroundColor: theme.colors.primary },
            ]}
          />
          {/* Stars */}
          <View
            style={[styles.star, styles.star1, { backgroundColor: "#FBBF24" }]}
          />
          <View
            style={[styles.star, styles.star2, { backgroundColor: "#FBBF24" }]}
          />
        </View>
      ) : (
        // Sun Icon (Light Mode)
        <View style={styles.iconContainer}>
          <View style={[styles.sun, { backgroundColor: "#FBBF24" }]} />
          <View
            style={[styles.ray, styles.rayTop, { backgroundColor: "#FBBF24" }]}
          />
          <View
            style={[
              styles.ray,
              styles.rayRight,
              { backgroundColor: "#FBBF24" },
            ]}
          />
          <View
            style={[
              styles.ray,
              styles.rayBottom,
              { backgroundColor: "#FBBF24" },
            ]}
          />
          <View
            style={[styles.ray, styles.rayLeft, { backgroundColor: "#FBBF24" }]}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 24,
    height: 24,
    position: "relative",
  },
  // Moon styles
  moon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    top: 2,
    left: 2,
  },
  moonCover: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    top: -2,
    left: 6,
  },
  star: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    position: "absolute",
  },
  star1: {
    top: 1,
    left: 1,
  },
  star2: {
    bottom: 3,
    left: 8,
  },
  // Sun styles
  sun: {
    width: 14,
    height: 14,
    borderRadius: 7,
    position: "absolute",
    top: 5,
    left: 5,
  },
  ray: {
    width: 2,
    height: 6,
    borderRadius: 1,
    position: "absolute",
  },
  rayTop: {
    top: -2,
    left: 11,
  },
  rayRight: {
    right: -2,
    top: 9,
    transform: [{ rotate: "90deg" }],
  },
  rayBottom: {
    bottom: -2,
    left: 11,
  },
  rayLeft: {
    left: -2,
    top: 9,
    transform: [{ rotate: "90deg" }],
  },
});
