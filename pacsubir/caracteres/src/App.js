


import React, { useState } from 'react';

import './App.css';
import UsuarioEntrada from './componentes/UsuarioEntrada';



const App = () => {
    const [input, setInput] = useState("");
    const charTotal = input.length;
   


    return (
        
        <>    
        <div >
        <h1 > Tarefa 3 </h1>

        <UsuarioEntrada setUser = { setInput }/> 
        
        <br/> <br/>
              
        <section > <span > Este texto tem { charTotal }  caracteres </span> </section > 
        </div>
       
        </>
    )
}

export default App;