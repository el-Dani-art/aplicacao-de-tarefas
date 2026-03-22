import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TaskContext } from '../TaskProvider';

const AddTask = () => {
  const [taskName, setTaskName] = React.useState('');
  const { addTask } = React.useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName) {
      addTask(taskName);
      navigate('/');
    } else {
      alert('Digite uma tarefa!');
    }
    // Remova as linhas 20 e 21 que estão sobrando!
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Nova Tarefa</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="O que precisa ser feito?"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{ padding: '8px', width: '250px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>
          Salvar Tarefa
        </button>
      </form>

      <br />
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
};

export default AddTask;
