import React from 'react';

export default function Clima({current1 , location1, datos, climaDay}) {

	let fecha = new Date();
	
	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max);
	  }

  console.log("datos: ", datos);
  console.log("CLIMA DEL DIA DE MAÑANA", climaDay.forecastday[0].day.avgtemp_c);
	fecha = fecha.toLocaleDateString("es-ES",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
  
  

  return (
    <div> 
        
	 {/* { ( typeof (datos) !== 'undefined' && typeof (current1) === 'object') ?
         (<div className="col">
			<div className='weather-card' style={ { background: `url("${datos.photos[0].src.large}") no-repeat` } }>
				<div className="top">
					<div className="wrapper">
                        <img style={ {marginLeft: 'auto', marginRight: 'auto'} }  src={current1.condition.icon} alt=""/>
						<h1 className="heading">{current1.condition.text}</h1>
						<h2 className="location">{location1.name}</h2>
						<p className="temp">
							<span className="temp-value">{current1.temp_c}</span>
							<span className="deg">0</span>
							<a href=""><span className="temp-type">C</span></a>
						</p>
					</div>
				</div>
			
			</div>
		</div>) : null
        } */}


<div className="container">
  <div className="weather-side" style={ { background: `url("${datos.photos[getRandomInt(0)].src.large}") no-repeat` } }>
    <div className="date-container">
      <h2 className="date-dayname">{fecha}</h2><span className="date-day"></span><i className="location-icon" data-feather="map-pin"></i><span className="location">{location1.name}</span>
    </div>
    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
      <h1 className="weather-temp">{current1.temp_c}°</h1>
      <h3 className="weather-desc">{current1.condition.text}</h3>
    </div>
  </div>
  <div className="info-side">
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation"> <span className="title">PRECIPITACION</span><span className="value">{current1.precip_in}%</span>
          <div className="clear"></div>
        </div>
        <div className="humidity"> <span className="title">HUMEDAD</span><span className="value">{current1.humidity}%</span>
          <div className="clear"></div>
        </div>
        <div className="wind"> <span className="title">VIENTO</span><span className="value">{current1.wind_kph} km/h</span>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    <div className="week-container">
      <ul className="week-list">
        <li><i className="day-icon" data-feather="cloud"></i><img src={current1.condition.icon} alt="" /><span className="day-name">Sabado</span><span className="day-temp">{current1.temp_c}°C</span></li>
        <li><i className="day-icon" data-feather="cloud-snow"></i><img src={climaDay.forecastday[1].day.condition.icon} alt="" /><span className="day-name">Domingo</span><span className="day-temp">{climaDay.forecastday[1].day.maxtemp_c}°C</span></li>
        <li><i className="day-icon" data-feather="cloud-rain"></i><img src={climaDay.forecastday[2].day.condition.icon} alt="" /><span className="day-name">Lunes</span><span className="day-temp">{climaDay.forecastday[2].day.maxtemp_c}°C</span></li>
        <div className="clear"></div>
      </ul>
    </div>
    {/* <div className="location-container">
      <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
    </div> */}
  </div>
 </div>
</div>

	


  )

  
  
}

