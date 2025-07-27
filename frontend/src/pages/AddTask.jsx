import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/api/tasks`, task);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Optional description"
          />

          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />

          <label>Status</label>
          <select name="status" value={task.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
