import React, { useState, useEffect } from 'react';
import Search from './Search';
import data from './data';
import WeatherDetails from './WeatherDetails';
import images from './image-data';

const apiKey = '71acb43b5585168d990ac95d8210debd';
const currentDate = new Date();

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
};

const formattedDate = currentDate.toLocaleString('en-US', options);
const formattedTemplate = `${formattedDate}`

function App() {
  const [image, setImage] = useState(images[0]);
  const [city, setCity] = useState('Salem');
  const [weatherData, setWeatherData] = useState(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = images.indexOf(image);
      const nextIndex = (currentIndex + 1) % images.length;
      setImage(images[nextIndex]);
    }, 6000);

    return () => {
      clearTimeout(timer); 
    };
  }, [image]);

  async function api_call(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);

      if (response.status === 404) {
        alert("check your spelling");
        return;
      }
  
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(`Error retrieving weather data: ${error}`);
      
    }
  }

  useEffect(() => {
    api_call(city);
  }, [city]);

  const handleCityUpdate = (newCity) => {
    setCity(newCity);
  }
  console.log(weatherData)
  return (
    <div className='main-container' style={{ background: 'pink' }} /*style={{ backgroundImage: `url(${image})` }}*/>
      <div className='hero-weather-details'>
      <div className='large-temperature'>
      <h1>{Math.floor(weatherData.main.temp)}°</h1>
      </div>
      <div className='location-time'>
      <h3>{weatherData.name}</h3>
      <p>{formattedTemplate}</p>
      </div>
      <div className='weather-desc'>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt='weather-icon' className='weather-icon'/>
      <p>{weatherData.weather[0].description}</p>
      </div>
      </div>
      <div className='side-panel'>
        <Search handleCityUpdate={handleCityUpdate} />
        <WeatherDetails weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
