import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const { tasks, addTask, moveTask } = useTasks();

  return (
    <>
      <header className="app-header">
        <h1>Icesi<span>Task</span></h1>
        <p className="subtitle">Do it simple!</p>
      </header>

      <main>
        <NewTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onMove={moveTask} />
        <TaskCounter tasks={tasks} />
      </main>

      <footer>
        <p id="credits">IcesiTask</p>
      </footer>
    </>
  );
}
