import './App.css';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import InfoBox from './InfoBox.js'

function App() {
  const [countries,setCountries]=useState(["USA","TN","FR","UK"]);
  const [country,setCountry]=useState('worldwide');
  
  //https://disease.sh/v3/covid-19/countries
  useEffect(()=>{
    const getCountriesData=async() =>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response)=>response.json())
      .then((data)=>{
        const countries =data.map((country)=>(
          {
            name:country.country,
            value:country.countryInfo.iso2,
          }));

          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event)=>{
    const countryCode=event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">

      {/* Header */}
      <div className="app__header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="app__dropdown" >
                <Select variant="outlined" onChange={onCountryChange} value={country}>
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                  {countries.map(country=>(
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                  ))}
                </Select>
            </FormControl>
      </div>
      
      <div className="app__stats"> 
        
      </div>
      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
