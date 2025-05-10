import React, { useState} from 'react' ;
import './styles.css';

const Userimput = ({ onAdduser}) =>{
    const [usuario, setUsuario] = useState('');
   
    const handleChange = (event) => {
        setUsuario(event.target.value);
    
};

      const  handleSubmit = () =>{
        if(usuario.trim){
            onAdduser(usuario);
            setUsuario('');
        }else{
            alert('Digite o nome do usuario');
        }
      };

      return(
        <div className='user-input'>
            <h2>Adicionar Usuario</h2>
            <input type='text'
            placeholder='Digite o nome do usuario'
            value={usuario}
            onChange={handleChange}/>

           <button onClick={handleSubmit}>Adicionar</button>

        </div>
      );
};

export default Userimput; 