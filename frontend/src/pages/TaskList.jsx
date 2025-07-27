import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Form.css';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Task List</h2>
          <Link to="/add">
            <button style={{ width: 'auto', padding: '6px 12px' }}>Add Task</button>
          </Link>
        </div>
        <ul style={{ marginTop: '20px' }}>
          {tasks.length === 0 ? (
            <p>No tasks available</p>
          ) : (
            tasks.map((task) => (
              <li key={task._id} style={{ marginBottom: '10px', color: '#333' }}>
                <strong>{task.title}</strong> - {task.status}
                <br />
                <Link to={`/edit/${task._id}`} style={{ color: '#1d4ed8' }}>Edit</Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
