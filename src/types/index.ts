// Task Types
export type Priority = "high" | "medium" | "low";

export interface Task {
  id: string;
  text: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
}

// Theme Types
export type ThemeMode = "light" | "dark";

export type Colors = {
  background: string;
  surface: string;
  card: string;
  primary: string;
  text: string;
  textSecondary: string;
  highPriority: string;
  mediumPriority: string;
  lowPriority: string;
  statusBar: string;
  border: string;
  error: string;
  success: string;
  warning: string;
};

export type Theme = {
  themeMode: ThemeMode;
  colors: Colors;
};

export type PriorityChipProps = {
  priority: Priority;
  selected: boolean;
  onPress: () => void;
};

// Component Props Types
export interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit?: (id: string, newText: string) => void;
}

export interface TaskInputProps {
  onAddTask: (text: string, priority: Priority) => void;
}
