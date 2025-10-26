import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/themeContext";
import { Header } from "./header";
import { ThemedHeaderProps } from "@/src/types/index";

/**
 * Header component with built-in theme toggle
 * Uses expo-vector-icons (Ionicons) for sun/moon icons
 *
 * Usage:
 * <ThemedHeader title="Counter" />
 * <ThemedHeader title="Tasks" showThemeToggle={false} />
 */
export const ThemedHeader: React.FC<ThemedHeaderProps> = ({
  title,
  showThemeToggle = true,
  ...otherProps
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme.themeMode === "dark";

  return (
    <>
      <StatusBar
        style={isDark ? "light" : "dark"}
        backgroundColor={theme.colors.surface}
      />
      <Header
        title={title}
        rightIcon={
          showThemeToggle ? (
            <Ionicons
              name={isDark ? "moon" : "sunny"}
              size={24}
              color={theme.colors.text}
            />
          ) : undefined
        }
        onRightIconPress={showThemeToggle ? toggleTheme : undefined}
        {...otherProps}
      />
    </>
  );
};
