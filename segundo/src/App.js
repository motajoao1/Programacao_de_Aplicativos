import React, { useState }  from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Feijão', 'Arroz', 'Farinha']);

  const adicionarUsuario = () => {
    if (usuarios.includes(usuario)) {
      alert('Item já existe!');
      return;
    }

    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  };
  return (
    <div className="App">
      <h1>Lista de compras</h1>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Digite o nome das compras"
      />
      <button onClick={adicionarUsuario}>Adicionar compras</button>

      <hr />
      <h2>Lista de compras</h2>
      <ul>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
