// Task Types
export type Priority = "high" | "medium" | "low";

export type TaskStatus = "pending" | "completed";

export type FilterStatus = "all" | "completed" | "pending";

export interface Task {
  id: string;
  text: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
}

// Theme Types
export type ThemeMode = "light" | "dark";

export interface Colors {
  background: string;
  surface: string;
  card: string;
  primary: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  highPriority: string;
  mediumPriority: string;
  lowPriority: string;
  statusBar: string;
}

export interface Theme {
  themeMode: ThemeMode;
  colors: Colors;
}

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

export interface FilterTabsProps {
  activeFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

export interface PriorityFilterProps {
  activePriority: Priority | "all";
  onPriorityChange: (priority: Priority | "all") => void;
}

export interface PriorityChipProps {
  priority: Priority;
  selected: boolean;
  onPress: () => void;
}
