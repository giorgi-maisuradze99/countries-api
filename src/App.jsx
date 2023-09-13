import { useState, useEffect } from 'react';
import './App.css';
import data from './data.json'

function App() {
  const [ darkMode, setDarkMode ] = useState(true)
  const [input, setInput] = useState('')
  const [ countries, setCountries ] = useState(data)
 
  function fetchData(value){
      const newData = data.filter((country)=>{
          return country.name.toLowerCase().includes(input.toLowerCase())
      })
      setCountries(newData)
  }
 
  const handleChange = (value) =>{
      setInput(value)
      fetchData(value)
  }
 
  return (
    <div className="container">
      <header>
        <div className='header-component-wrapper'>
          <h1>
          Where in the world?
          </h1>
          <button onClick={()=> setDarkMode(!darkMode)}> {darkMode ? "Dark Mode" : "Light Mode"} </button>
        </div>
      </header>
      
      <div className='data-wrapper'>
        <div className='search-container'>
          <div className='search-bar'>
            <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                width="800px" height="800px" viewBox="0 0 390.704 390.704"
                xml:space="preserve">
              <g>
                <g>
                  <path d="M379.711,326.556L265.343,212.188c30.826-54.189,23.166-124.495-23.001-170.663c-55.367-55.366-145.453-55.366-200.818,0
                    c-55.365,55.366-55.366,145.452,0,200.818c46.167,46.167,116.474,53.827,170.663,23.001l114.367,114.369
                    c14.655,14.655,38.503,14.654,53.157,0C394.367,365.059,394.368,341.212,379.711,326.556z M214.057,214.059
                    c-39.77,39.771-104.479,39.771-144.25,0c-39.77-39.77-39.77-104.48,0-144.25c39.771-39.77,104.48-39.77,144.25,0
                    C253.828,109.579,253.827,174.29,214.057,214.059z"/>
                </g>
              </g>
            </svg>
            <input value={input} onChange={(e) =>  handleChange(e.target.value)} type='search' id='search-input' placeholder='Search for a country...'/>
          </div>
          <select name="regions" id="regions-select">
            <option value="select-default" defaultValue={true}>Select a region...</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div className='countries-container'>
          {countries.map((country)=>{
            return(
              <div className='country'>
                  <img src={country.flags.png} />
                  <div className='country-info'>
                    <h3>
                      {country.name}  
                    </h3>
                    <br/>
                    Population: {country.population}
                    <br/>
                    Region: {country.region}
                    <br/>
                    Capital: {country.capital}
                  </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
