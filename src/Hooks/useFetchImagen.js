import React from "react";
import { useEffect, useState } from "react";
import { getImagen } from "../Helpers/getImage";


export const useFetchImagen = (descripcion) => {


    const [clima, setClima] = useState({});
    

    const obtenerImagen = async() => {

      const data = await getImagen(descripcion);

      setClima(data);
    };

    // obtenerClima();

    useEffect( () => {
          obtenerImagen();
    }, [descripcion]);

    return clima;

}