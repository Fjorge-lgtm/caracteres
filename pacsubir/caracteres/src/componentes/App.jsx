


import { useState } from "react";
import './App.css';
import UsuarioEntrada from './componentes/UsuarioEntrada';



const App = () => {
  let [input, setInput] = useState("");

  function inputHandler(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <textarea onChange={inputHandler}></textarea>

      <div>total characters: {input.length}</div>
      
    </div>
  );
}



export default App;