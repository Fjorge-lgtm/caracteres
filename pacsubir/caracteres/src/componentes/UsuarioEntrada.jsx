import React from 'react';
const UsuarioEntrada = ({setUser}) => {
  return (
    <>
      <label htmlFor="entrada">Digite alguma coisa, vou lhe informar quantos caracteres foram utilizados: </label>
      <input type="text" name="entrada" id="UsuarioEntrada" onChange={(e) => setUser(e.target.value)}/>
    </>
  )
}

export default UsuarioEntrada;