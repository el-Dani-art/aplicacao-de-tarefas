import React from 'react';

export const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

  // Carregar LocalStorage quando iniciar
  React.useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(stored);
  }, []);

  // Salvar no LocalStorage quando a tasks muda
  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
