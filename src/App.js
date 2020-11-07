import './App.css';
import { FormControl, MenuItem, Select, Card, CardContent} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import InfoBox from './InfoBox.js'
import Map from './Map.js';
import Table from './Table.js';
import {SortData} from './util.js';
import LineGraph from './LineGraph.js';

function App() {
  const [countries,setCountries]=useState([]);
  const [country,setCountry]=useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([]);


  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response=>response.json())
      .then(data=>{
        setCountryInfo(data);
    });
  },[]);
  
  //https://disease.sh/v3/covid-19/countries
  useEffect(()=>{
    const getCountriesData=async() =>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response)=>response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        })).filter((country) => country.value !== null);
          
          const sortedData=SortData(data);
          setTableData(sortedData)
          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event)=>{
    const countryCode=event.target.value;
    setCountry(countryCode);

    const url=countryCode==='worldwide'?'https://disease.sh/v3/covid-19/all': 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then(response=>response.json())
    .then(data=>{
      setCountry(countryCode);
      setCountryInfo(data);
    });

    // https://disease.sh/v3/covid-19/countries/all
    // https://disease.sh/v3/covid-19/countries/{COUNTRY_CODE}
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
          <InfoBox title="Corona Virus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}></InfoBox>
          
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}></InfoBox>

          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}></InfoBox>
          
        </div>
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          {/* Table */}
          <h3>Live Cases by Country</h3>
          <Table countries={tableData}/>
          {/* Graph */}
          <h3>Worldwide Cases</h3>
          <LineGraph casesType='cases'/>
        </CardContent>
      </Card>

    </div>
  );
}

export default App;