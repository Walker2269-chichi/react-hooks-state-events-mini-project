function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(task.id)} // Pass task id to onDelete
        />
      ))}
    </div>
  );
}
