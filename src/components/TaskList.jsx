import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return (
      <ul>
        <li className="empty">Todavía no hay tareas.</li>
      </ul>
    );
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
}
