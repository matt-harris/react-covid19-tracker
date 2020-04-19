import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  const [data, setData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [country, setCountry] = useState('');

  /**
   * Fetch data from API and set state.
   * Confirmed, Recovered, Deaths and Last Update date.
   */
  async function fetchData(country) {
    let url = `https://covid19.mathdro.id/api`;

    if (country) {
      url = `${url}/countries/${country}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    const { confirmed, recovered, deaths, lastUpdate } = await data;

    setData({
      confirmed,
      recovered,
      deaths,
      lastUpdate
    });
  }

  /**
   * Fetch daily data from API and set state.
   */
  async function fetchDailyData() {
    const res = await fetch(`https://covid19.mathdro.id/api/daily`);
    const data = await res.json();

    setDailyData(data
      .map(data => ({
        confirmed: data.confirmed.total,
        deaths: data.deaths.total,
        date: data.reportDate,
      }))
    )
  }

  /**
   * Fetch all country names that have reported cases and set state.
   */
  async function fetchCountryData() {
    const res = await fetch(`https://covid19.mathdro.id/api/countries`);
    const data = await res.json();
    const { countries } = await data;

    setCountryData(countries.map(country => country.name));
  }

  /**
   * Handle Country change: fetchData and update state.
   */
  async function handleCountryChange(country) {
    fetchData(country);
    setCountry(country);
  }

  useEffect(() => { fetchData() }, []);
  useEffect(() => { fetchDailyData() }, []);
  useEffect(() => { fetchCountryData() }, []);

  return (
    <div className="container">
      <Header countries={countryData} handleCountryChange={handleCountryChange} />
      <Cards data={data} />
      <Chart data={dailyData} countryData={data} country={country} />
      <Footer />
    </div>
  )
}

export default App;
