import React, { useState, useEffect } from 'react';
import Frases from './components/Frases';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  text-align: center;
`;

function App() {

  const [ frase, guardarFrase ] = useState({});

  /*
    Que sea asincrono hace que espere hasta que se devuelva algo de la url
    entonces despues ejecuta. El await espera la respuesta de la API
  */
  const obtenerFrase = async () => {
    // Version 1 para traer desde api
    
    // const getApi = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // const frase = getApi.then( respuestaApi => {
    //   return respuestaApi.json()
    // });
    // frase.then( resultado => console.log(resultado) );

    // Version 2 para traer desde api
    const getApi = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const fraseApi = await getApi.json();
    
    guardarFrase(fraseApi[0]);
  }


    // Ejecuto la funcion a penas se cargue la pagina para mostrar una frase
    
    useEffect(() => {
      obtenerFrase();
    }, [])

  return (
    <Contenedor>
      <button
        onClick = {obtenerFrase}
      >
        Generar Frase
      </button>
      <Frases
        frase = {frase}
      />
    </Contenedor>
  );
}

export default App;
