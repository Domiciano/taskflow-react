import { useState } from "react";

const sampleTasks = [
  { id: 1, title: "Preparar la presentación del lunes", done: false, createdAt: "2026-09-14T08:05:00" },
  { id: 2, title: "Revisar el informe de gastos", done: true, createdAt: "2026-09-14T08:10:00" },
  { id: 3, title: "Responder el correo de Compras", done: false, createdAt: "2026-09-14T08:15:00" },
];

export function useTasks() {
  const [tasks, setTasks] = useState(sampleTasks);

  function addTask(title) {
    setTasks((current) => [
      ...current,
      { id: Date.now(), title: title, done: false, createdAt: new Date().toISOString() },
    ]);
  }

  function toggleTask(id) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  return { tasks, addTask, toggleTask };
}
