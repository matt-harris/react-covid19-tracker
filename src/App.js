import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Footer from './components/Footer/Footer';
import GlobalStyles from './theme/globalStyles';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 64rem;
  margin: auto;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
`;

const App = () => {
  /**
   * State.
   */
  const [data, setData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [countryNames, setCountryNames] = useState([]);
  const [country, setCountry] = useState('');

  /**
   * Fetch data from API and set state.
   * Confirmed, Recovered, Deaths and Last Update date.
   * @param {string} country - Selected Country
   * @returns {Array} if Country is passed returns Country data else returns Global data.
   */
  async function fetchData(country) {
    let url = `https://covid19.mathdro.id/api`;

    if (country) {
      url = `${url}/countries/${country}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    const { confirmed, recovered, deaths, lastUpdate } = data;

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
  async function fetchCountryNames() {
    const res = await fetch(`https://covid19.mathdro.id/api/countries`);
    const data = await res.json();
    const { countries } = data;

    setCountryNames(countries.map(country => country.name));
  }

  /**
   * Handle Country change: update state.
   */
  function handleCountryChange(country) {
    setCountry(country);
  }

  useEffect(() => { fetchDailyData() }, []);
  useEffect(() => { fetchCountryNames() }, []);
  useEffect(() => { fetchData(country) }, [country]);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header countries={countryNames} handleCountryChange={handleCountryChange} />
        <Cards data={data} />
        <Chart data={dailyData} countryData={data} country={country} />
        <Footer />
      </Container>
    </>
  )
}

export default App;
