import { useEffect, useState } from "react";

const STORAGE_KEY = "taskflow.tasks";
const TASK_STATUSES = ["todo", "in-progress", "done"];

const sampleTasks = [
  { id: 1, title: "Preparar la presentación del lunes", status: "todo", createdAt: "2026-09-14T08:05:00" },
  { id: 2, title: "Revisar el informe de gastos", status: "done", createdAt: "2026-09-14T08:10:00" },
  { id: 3, title: "Responder el correo de Compras", status: "in-progress", createdAt: "2026-09-14T08:15:00" },
];

function normalizeTask(task) {
  const status = TASK_STATUSES.includes(task.status)
    ? task.status
    : task.done
      ? "done"
      : "todo";

  return {
    id: task.id,
    title: task.title,
    status,
    createdAt: task.createdAt,
  };
}

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      const parsedTasks = JSON.parse(saved);
      if (Array.isArray(parsedTasks)) {
        return parsedTasks.map(normalizeTask);
      }
    }
  } catch (error) {
    console.warn("No se pudo leer lo que estaba guardado.", error);
  }
  return sampleTasks;
}

export function useTasks() {
  const [tasks, setTasks] = useState(loadTasks);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.warn("No se pudo guardar.", error);
    }
  }, [tasks]);

  function addTask(title) {
    setTasks((current) => [
      ...current,
      { id: Date.now(), title: title, status: "todo", createdAt: new Date().toISOString() },
    ]);
  }

  function moveTask(id, status) {
    if (!TASK_STATUSES.includes(status)) {
      return;
    }

    setTasks((current) =>
      current.map((task) =>
        String(task.id) === String(id) && task.status !== status ? { ...task, status } : task
      )
    );
  }

  return { tasks, addTask, moveTask };
}
