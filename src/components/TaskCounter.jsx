function pluralize(count, singular, plural) {
  return count + " " + (count === 1 ? singular : plural);
}

export default function TaskCounter({ tasks }) {
  return <p className="counter">{pluralize(tasks.length, "tarea", "tareas")}</p>;
}
