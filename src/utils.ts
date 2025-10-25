import { Priority } from "@/types";

// Priority Display Names
export const getPriorityLabel = (priority: Priority): string => {
  const labels: Record<Priority, string> = {
    high: "High",
    medium: "Medium",
    low: "Low",
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

// Format creation date to relative time
export const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 1) {
    return "Just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else {
    const months = Math.floor(diffInDays / 30);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }
};
