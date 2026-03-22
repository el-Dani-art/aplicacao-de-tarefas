import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import { TaskProvider } from './TaskProvider';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="main-container">
        <div className="card">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-task" element={<AddTask />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
