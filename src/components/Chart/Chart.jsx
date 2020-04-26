import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartWrap = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const Chart = ({ country, countryData, data }) => {
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          callback(value) {
            return Number(value).toLocaleString('en')
          }
        }
      }]
    }
  }

  const lineChart = (
    data.length ? (
      <Line
        options={options}
        data={{
          labels: data.map(({ date }) => {
            const formatDate = new Date(date);
            const options = { month: 'short', day: 'numeric' };
            return new Intl.DateTimeFormat('en-GB', options).format(formatDate)
          }),
          datasets: [{
            data: data.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#247ba0',
            fill: true,
          }, {
            data: data.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: '#ff1654',
            fill: true,
          }],
        }}
      />
    ) : null
  );

  const barChart = (
    countryData.confirmed
      ? (
        <Bar
          options={{
            ...options,
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` }
          }}
          data={{
            labels: [`Infected`, `Recovered`, `Deaths`],
            datasets: [{
              label: `People`,
              backgroundColor: [
                `#247ba0`,
                `#70c1b3`,
                `#ff1654`,
              ],
              data: [countryData.confirmed.value, countryData.recovered.value, countryData.deaths.value]
            }]
          }}
        />
      ) : null
  )

  return (
    <ChartWrap>
      {country ? barChart : lineChart}
    </ChartWrap>
  );
};

export default Chart;
