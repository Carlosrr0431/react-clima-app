import React from "react";
import Clima from './Clima';
import { UseFetchClima } from '../Hooks/UseFetchClima';
import { useFetchImagen } from '../Hooks/useFetchImagen';
import { useEffect, useState } from 'react';


export default function ClimaGrid({regionIngresada}) {

    const {current, location, data, climaDay} = UseFetchClima(regionIngresada);

    console.log("CURRENT: ", current );
    console.log("DATACLIMAGRID: ", data );
    console.log('LOCATION: ', location);
    console.log('ClimaDay: ', climaDay );

    return (
        <div>
            {
                ( typeof(data) !== 'undefined' && typeof(location) !=='undefined') && typeof(current) !== 'undefined' ? <Clima current1={current}  location1={location} datos={data} climaDay={climaDay}/> : null
            }


            {/* {
               typeof(data) !== 'undefined' && typeof(location) !== 'undefined' && <Clima current1={current}  location1={location} datos={data}/>
            } */}
     
            {/* <h1> {current} </h1> */}
            {/* {
                typeof (current) === 'object' && <h1> {current.temp_c} </h1>
            }

            {
                typeof (current) === 'object' && <h1> {current.temp_f} </h1>
            }

            {
                typeof (current) === 'object' && <h1> {current.condition.text} </h1>
            }

            {
                typeof (location) === 'object' && <h1> {location.name} </h1>
            }

            {
                typeof (current) === 'object' && <img src={current.condition.icon} ></img> */}
            {/* }            */}

        </div>
    )
}
