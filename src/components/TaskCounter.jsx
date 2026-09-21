function pluralize(count, singular, plural) {
  return count + " " + (count === 1 ? singular : plural);
}

export default function TaskCounter({ tasks }) {
  const doneCount = tasks.filter((task) => task.done).length;

  return (
    <p className="counter">
      {pluralize(tasks.length, "tarea", "tareas")} · {pluralize(doneCount, "completada", "completadas")}
    </p>
  );
}
