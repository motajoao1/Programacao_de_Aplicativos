import React, { useState }  from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Maria', 'João', 'Ana']);

  const adicionarUsuario = () => {
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe!');
      return;
    }

    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  };
  return (
    <div className="App">
      <h1>Gerenciador de Usuários</h1>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Digite o nome do usuário"
      />
      <button onClick={adicionarUsuario}>Adicionar Usuário</button>

      <hr />
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
