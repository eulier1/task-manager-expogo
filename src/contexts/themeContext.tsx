import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { Colors, ThemeMode } from "@/src/types";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { THEME_STORAGE_KEY } from "../constant";

const lightColors: Colors = {
  background: "#F5F5F5",
  surface: "#FFFFFF",
  card: "#FFFFFF",
  primary: "#6366F1",
  text: "#1A1A1A",
  textSecondary: "#666666",
  border: "#E0E0E0",
  error: "#EF4444",
  success: "#10B981",
  warning: "#F59E0B",
  highPriority: "#EF4444",
  mediumPriority: "#F59E0B",
  lowPriority: "#10B981",
  statusBar: "#FFFFFF",
};

const darkColors: Colors = {
  background: "#1A1A1A",
  surface: "#2A2A2A",
  card: "#2A2A2A",
  primary: "#6366F1",
  text: "#FFFFFF",
  textSecondary: "#999999",
  border: "#444444",
  error: "#EF4444",
  success: "#10B981",
  warning: "#F59E0B",
  highPriority: "#EF4444",
  mediumPriority: "#F59E0B",
  lowPriority: "#10B981",
  statusBar: "#000000",
};

interface ThemeContextType {
  theme: {
    themeMode: ThemeMode;
    colors: Colors;
  };
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): ReactElement => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>("dark");

  // Load saved theme preference
  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        setThemeModeState(savedTheme);
      }
    } catch (error) {
      console.error("Error loading theme preference:", error);
    }
  };

  const saveThemePreference = async (mode: ThemeMode) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      console.error("Error saving theme preference:", error);
    }
  };

  const toggleTheme = () => {
    const newMode: ThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeModeState(newMode);
    saveThemePreference(newMode);
  };

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    saveThemePreference(mode);
  };

  const theme = {
    themeMode,
    colors: themeMode === "light" ? lightColors : darkColors,
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use Theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
