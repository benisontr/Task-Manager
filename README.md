📝 Task Manager Web Application

A simple full-stack Task Management web application built using  React (frontend), Node.js, Express, and MongoDB Atlas (backend). This app allows users to create, update, delete, and manage tasks with due dates and status labels.

📂 Project Structure

TaskManager/
│
├── backend/ # Express.js server
│ ├── routes/ # API routes
│ ├── models/ # Mongoose schemas
│ ├── .env # Environment variables (Mongo URI, PORT)
│ └── server.js # Entry point for backend
│
├── frontend/ # React app (Vite)
│ ├── src/
│ │ ├── pages/ # AddTask, EditTask, TaskList
│ │ └── App.jsx # Route configuration
│ ├── .env # VITE_API_BASE_URL (backend link)
│ └── vite.config.js # Vite configuration


⚙️ Features

- ✅ Add, edit, and list tasks
- ✅ Tasks include title, description, due date, and status
- ✅ Fully connected frontend and backend using REST API
- ✅ Built with clean, modular code and responsive design

🧑‍💻 Tech Stack

- Frontend: React.js, Vite, Axios, React Router, CSS
- Backend: Node.js, Express.js, MongoDB Atlas, Mongoose, CORS
- Version Control: Git + GitHub

🛠️ Setup Instructions

1. Clone the repository
   ```bash
     git clone https://github.com/benisontr/Task-Manager.git
     cd Task-Manager

2. Backend Setup
   ```bash
    cd backend
    npm install
    # Create a .env file with your Mongo URI & PORT
    # MONGO_URI=your_mongodb_connection_string
    # PORT=5000 
    npm start
   
  The backend will run on: http://localhost:5000/api/tasks

3. Frontend Setup
   ```bash
    cd ../frontend
    npm install
    npm run dev

  The frontend will run on: http://localhost:5173

