import React from "react";
import { useState } from 'react';
import ClimaGrid from './Components/ClimaGrid';
import IngresarLocalidad from './Components/IngresarLocalidad';

export const App = () => {
  const [region, setRegion] = useState('');

  

  const mostrarPorRegion = (newRegion) => {
    
    setRegion(newRegion);

  }
 
  return (
    <>

      <IngresarLocalidad nuevaRegion = {(newRegion) => mostrarPorRegion(newRegion)}/>

      {
        region !== '' && typeof(region) !== 'undefined' && <ClimaGrid regionIngresada={region}/>
      }

    
    </>
  )
}
