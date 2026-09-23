import TaskColumn from "./TaskColumn";

const columns = [
  { status: "todo", label: "Por hacer" },
  { status: "in-progress", label: "En proceso" },
  { status: "done", label: "Hecho" },
];

export default function TaskList({ tasks, onMove }) {
  return (
    <section className="board" aria-label="Tablero de tareas">
      <p className="board-hint">Arrastra las tarjetas para cambiar su estado.</p>
      <div className="task-board">
        {columns.map((column) => (
          <TaskColumn
            key={column.status}
            status={column.status}
            label={column.label}
            tasks={tasks.filter((task) => task.status === column.status)}
            onMove={onMove}
          />
        ))}
      </div>
    </section>
  );
}
