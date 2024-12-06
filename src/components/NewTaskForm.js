import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const handleTextChange = (e) => setTaskText(e.target.value);
  const handleCategoryChange = (e) => setTaskCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText && taskCategory) {
      onTaskFormSubmit({ text: taskText, category: taskCategory });
      setTaskText(""); // Clear the input fields
      setTaskCategory(""); // Reset the category to default
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
