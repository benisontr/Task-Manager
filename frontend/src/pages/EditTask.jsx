import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
      setTask(res.data);
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/tasks/${id}`, task);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
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

          <button type="submit">Update Task</button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
