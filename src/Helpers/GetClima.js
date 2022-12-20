export const GetClima = async(region) => {

    const url = `https://api.weatherapi.com/v1/current.json?key=4d6328010de64248b34232624221112&q=${region}&aqi=no&lang=es`;
    
    const url2 = `https://api.weatherapi.com/v1/forecast.json?key=4d6328010de64248b34232624221112&q=${region}&days=5`;
  
    const resp = await fetch(url);
  
    const data = await resp.json();
  
    return data;
  }
  