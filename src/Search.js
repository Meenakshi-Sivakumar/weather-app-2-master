import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ handleCityUpdate, isError }) => {
  const [cityInput, setCityInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cityInput === "") {
      return;
    }
    handleCityUpdate(cityInput);
    setCityInput("");
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Another Location"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button type="submit">
            <BsSearch className="react-search-icon" />
          </button>
        </form>
        {isError ? <p style={{color:'red', fontSize:16, letterSpacing: 1}}>psst! check your spelling.</p> : ''}
      </div>
      <ul className="popular-cities-list">
        <li>
          <button onClick={() => handleCityUpdate("Salem")}>Salem</button>
        </li>
        <li>
          <button onClick={() => handleCityUpdate("Coimbatore")}>
            Coimbatore
          </button>
        </li>
        <li>
          <button onClick={() => handleCityUpdate("Chennai")}>Chennai</button>
        </li>
        <li>
          <button onClick={() => handleCityUpdate("London")}>London</button>
        </li>
      </ul>
      <div className="divider"></div>
    </div>
  );
};

export default Search;
