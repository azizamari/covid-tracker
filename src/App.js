import './App.css';
import { FormControl, MenuItem, Select, Card, CardContent} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import InfoBox from './InfoBox.js'
import Map from './Map.js';

function App() {
  const [countries,setCountries]=useState([]);
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
      <div className="app__left">
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
          <InfoBox title="Corona Virus Cases" cases={152} total={3000}></InfoBox>
          
          <InfoBox title="Recovered" cases={5552} total={2000}></InfoBox>

          <InfoBox title="Deaths" cases={1512} total={1540}></InfoBox>
          
        </div>
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          {/* Table */}
          {/* Graph */}
        </CardContent>
      </Card>

    </div>
  );
}

export default App;
