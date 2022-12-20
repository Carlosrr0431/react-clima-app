import React from "react";
import { useEffect, useState } from "react";

export const UseFetchClima = (region) => {

    const [clima, setClima] = useState({});
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const obtenerClima = async() => {
      try {
        const url2 = `https://api.weatherapi.com/v1/forecast.json?key=3eef10edea9747d3961144313221712&q=${region}&days=5&lang=es&aqi=no`;
      
        const resp = await fetch(url2);

        const data = await resp.json();

        const resp2 = await fetch(`https://api.pexels.com/v1/search?query='Clima '${data.current.condition.text}&lang='es-ES'` ,{
          headers:{
              Authorization: '563492ad6f91700001000001857c54491d734650a2713162e7e978dd'
          },
        });

        const data2 = await resp2.json();

        setClima(data);
        setData(data2);

      } catch (error) {
        
      }
    }

    useEffect( () => {
        obtenerClima();
    }, [region]);

    return {
      current: clima.current,
      location: clima.location,
      data: data,
      climaDay: clima.forecast
      
    }

}
