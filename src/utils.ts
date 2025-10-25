import { Priority } from '@/src/types';

// Priority Display Names
export const getPriorityLabel = (priority: Priority): string => {
  const labels: Record<Priority, string> = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };
  return labels[priority];
};

// Priority Colors (for theme-independent references)
export const getPriorityColor = (priority: Priority, colors: any): string => {
  const priorityColors: Record<Priority, string> = {
    high: colors.highPriority,
    medium: colors.mediumPriority,
    low: colors.lowPriority,
  };
  return priorityColors[priority];
};