export default function TaskItem({ task }) {
  return (
    <li>
      <span className="marker">○</span>
      <span className="title">{task.title}</span>
    </li>
  );
}
