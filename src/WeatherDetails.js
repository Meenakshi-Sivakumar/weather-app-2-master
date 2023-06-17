import React from "react";

const WeatherDetails = ({weatherData}) => {
    return (
        <div className='weather-details'>
          <div className='weather-details-flex'>
            <h3>Weather Details</h3>
          </div>
          <div className="weather-details-sub">
          {weatherData.clouds && (
            <div className='weather-details-flex'>
              <h4>Cloudy</h4>
              <p>{weatherData.clouds.all}%</p>
            </div>
          )}
          {weatherData.main && (
            <div className='weather-details-flex'>
              <h4>Humidity</h4>
              <p>{weatherData.main.humidity}%</p>
            </div>
          )}
          {weatherData.wind && (
            <div className='weather-details-flex'>
              <h4>Wind</h4>
              <p>{weatherData.wind.speed}m/s</p>
            </div>
          )}
          {weatherData.main && (
            <div className='weather-details-flex'>
              <h4>Feels Like</h4>
              <p>{weatherData.main.feels_like}°C</p>
            </div>
          )}
          </div>
          <div className="divider"></div>
        </div>
    );
}

export default WeatherDetails;