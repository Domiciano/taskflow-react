export default function TaskItem({ task, onToggle }) {
  return (
    <li>
      <button
        type="button"
        className="check"
        aria-label={task.done ? "Marcar como pendiente" : "Marcar como completada"}
        onClick={() => onToggle(task.id)}
      >
        {task.done ? "●" : "○"}
      </button>
      <span className={task.done ? "title done" : "title"}>{task.title}</span>
    </li>
  );
}
