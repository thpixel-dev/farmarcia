import React, { useState } from 'react';
import './farmacia.css';

function Farmacia() {
 
  const useState()

  function gerarSenha() {
  let senha = {
  numero: Date.now(),
  tipo: 'normal',
  };
  setFila()
  }
  
  function atender() {
  if (fila.length) {
  alert(`Atendendo senha: ${fila.numero}`)
  setFila(fila.slice(1)); // REMOVE O PRIMEIRO DA FILA
  } else {
  alert('Não tem ninguém na fila')
  }
}
  return (
    <>
      
  </> 
  );
}

export default Farmacia;
