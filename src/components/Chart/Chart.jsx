import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './Chart.scss';

const Chart = ({country, countryData, data}) => {
  const lineChart = (
    data.length ? (
      <Line
        data={{
          labels: data.map(({ date }) => date),
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
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}`},
          }}
        />
      ) : null
  )

  return (
    <div className="Chart">
      { country ? barChart : lineChart }
    </div>
  );
};

export default Chart;
