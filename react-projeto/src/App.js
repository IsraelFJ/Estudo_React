import { useState } from 'react';
import './App.css';

function App() {
  // hook é uma função que ´permite adicionar o esrado a um componente.
  const [usuario, setUsuario] = useState('')
  const [usuarios, setUsuarios]  = useState(['Tonho', 'Martinha', 'Vicente']);
  
  const adicionarUsuario = () => {
    if (usuarios.includes(usuario)){
      alert('Usuário já existe na lista.');
      return;
    }
    // adicionar novo usuario na lista
    setUsuarios([...usuarios, usuario]);
    // limpa o campo de entrada 
    setUsuario('') 
  }
  
  
  return (
    <div className='App'>
      <h1>Cadastro de Cliente</h1>
      <img src="https://www.shoppingtambia.com.br/fotos/estabelecimento/9e3e1aaefc8b85e3e0e89720384190bf_logo_188.png" alt="Logo da empresa" className="logo" />
      <hr/>
      <h2>Adicionar Usuários</h2>
      <input type='text' placeholder='Digite seu nome' value={usuario} 
      onChange={(e) => setUsuario(e.target.value)}
      />

      <button onClick={adicionarUsuario}>Adicionar</button>
      <hr/>
      <ol>
        {usuarios.map((usuario, index) => (<li key={index}>{usuario}</li>))}
      </ol>

    </div>
   );
}

export default App;
