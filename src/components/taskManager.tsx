import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  RefreshControl,
  Alert,
} from "react-native";
import { useTheme } from "@/src/contexts/themeContext";
import {
  TaskInput,
  TaskItem,
  TaskCounter,
  FilterTabs,
  PriorityFilter,
  ThemedHeader,
} from "./";
import { Task, Priority, FilterStatus } from "../types";
import { generateId } from "@/src/utils";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASKS_STORAGE_KEY } from "../constant";

export const TaskManagerScreen: React.FC = () => {
  const { theme } = useTheme();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [filterPriority, setFilterPriority] = useState<Priority | "all">("all");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        // Convert date strings back to Date objects
        const tasksWithDates = parsedTasks.map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        }));
        setTasks(tasksWithDates);
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
      Alert.alert("Error", "Failed to load tasks");
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks:", error);
      Alert.alert("Error", "Failed to save tasks");
    }
  };

  const handleAddTask = (text: string, priority: Priority) => {
    const newTask: Task = {
      id: generateId(),
      text,
      priority,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([newTask, ...tasks]);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTasks(tasks.filter((task) => task.id !== id));
        },
      },
    ]);
  };

  // Pull to refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  };

  // Filter tasks based on status and priority
  const getFilteredTasks = (): Task[] => {
    let filtered = tasks;

    // Filter by status
    if (filterStatus === "completed") {
      filtered = filtered.filter((task) => task.completed);
    } else if (filterStatus === "pending") {
      filtered = filtered.filter((task) => !task.completed);
    }

    // Filter by priority
    if (filterPriority !== "all") {
      filtered = filtered.filter((task) => task.priority === filterPriority);
    }

    // Sort by creation date (newest first)
    return filtered.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  };

  // Calculate counts
  const totalCount = tasks.length;
  const pendingCount = tasks.filter((task) => !task.completed).length;
  const filteredTasks = getFilteredTasks();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Header */}
      <View
        style={[styles.header, { backgroundColor: theme.colors.background }]}
      >
        <ThemedHeader title="Task Manager" />
      </View>

      {/* Task Input */}
      <TaskInput onAddTask={handleAddTask} />

      {/* Filter Tabs */}
      <FilterTabs
        activeFilter={filterStatus}
        onFilterChange={setFilterStatus}
      />

      {/* Priority Filter */}
      <PriorityFilter
        activePriority={filterPriority}
        onPriorityChange={setFilterPriority}
      />

      {/* Task Counter */}
      <TaskCounter pendingCount={pendingCount} totalCount={totalCount} />

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTask}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.primary}
            colors={[theme.colors.primary]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <View style={styles.emptyTextContainer}>
              {/* Empty state would go here */}
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {},
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    alignItems: "center",
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },
  emptyTextContainer: {
    padding: 16,
  },
});
