import { useState } from "react";

export default function TaskItem({ task }) {
  const [isDragging, setIsDragging] = useState(false);

  function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", String(task.id));
    event.dataTransfer.effectAllowed = "move";
    setIsDragging(true);
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  return (
    <li
      className={isDragging ? "task-card dragging" : "task-card"}
      draggable
      title="Arrastra para cambiar de columna"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <span className="drag-indicator" aria-hidden="true">⠿</span>
      <span className={task.status === "done" ? "task-title done" : "task-title"}>
        {task.title}
      </span>
    </li>
  );
}
