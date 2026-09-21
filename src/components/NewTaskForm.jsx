import { useState } from "react";

export default function NewTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (cleanTitle === "") {
      return;
    }
    onAdd(cleanTitle);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Nueva tarea..."
        autoComplete="off"
      />
      <button type="submit">Añadir</button>
    </form>
  );
}
