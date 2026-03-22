import React from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../TaskProvider';
import '../App.css';

const Home = () => {
  const { tasks, removeTask } = React.useContext(TaskContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Minhas Tarefas</h1>

      {/* Link para navegar até a página de adicionar */}
      <Link to="/add-task">
        <button style={{ marginBottom: '20px', cursor: 'pointer' }}>
          + Adicionar Nova Tarefa
        </button>
      </Link>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: '10px' }}>
              <span style={{ marginRight: '15px' }}>{task.name}</span>
              <button
                onClick={() => removeTask(task.id)}
                className="btn-excluir"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
