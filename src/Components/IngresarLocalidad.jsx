import React, { useState } from 'react';

export default function IngresarLocalidad({nuevaRegion}) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue( target.value );
    };
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        
        nuevaRegion(inputValue);

        setInputValue('');
    }

  return (
    <section className="top-banner">
        <div className="container2">
          <h1 className="heading"> Clima</h1>
          <form onSubmit={onSubmit}>
            <input onChange={onInputChange} type="text" value={inputValue} placeholder="Buscar por ciudad" />
               <button type="submit" className='lupa1' >
                <img type='svg' className='lupa2' src="public/lupa.svg" alt="" />
                </button> 
              
              <span ></span>
          </form>
        </div>
      </section>
  )
}
