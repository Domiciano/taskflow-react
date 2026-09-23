import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskColumn({ status, label, tasks, onMove }) {
  const [isDragOver, setIsDragOver] = useState(false);

  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  }

  function handleDragLeave(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDragOver(false);
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");

    if (taskId !== "") {
      onMove(taskId, status);
    }

    setIsDragOver(false);
  }

  return (
    <section
      className={isDragOver ? "task-column drag-over" : "task-column"}
      aria-label={label}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <header className="column-header">
        <h2>{label}</h2>
        <span className="column-count">{tasks.length}</span>
      </header>
      <ul className={tasks.length === 0 ? "task-list empty" : "task-list"}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        {tasks.length === 0 && <li className="column-empty">Suelta tareas aquí</li>}
      </ul>
    </section>
  );
}
