import React, {useState} from 'react';
import './App.css';
import logo from './assets/images/wilson-sons.png';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {

  const [usuarios, setUsuarios] = useState(['Tonho', 'Martinha', 'Vicente']);
  
  const adicionarUsuario = (novoUsuario) =>{
    if (usuarios.includes(novoUsuario)){
      alert('Usuario já existe na lista');
      return;
    }
    setUsuarios([...usuarios, novoUsuario]);
  }

  return (
   <div className='App'>
    <img src = {logo} alt='Logo wilson png ' className='logo'/>
    <hr/>
    <UserInput onAdduser={adicionarUsuario}/>
    <hr/>
    <UserList usuarios={usuarios}/>

   </div>
  );

}

export default App;
                                                  