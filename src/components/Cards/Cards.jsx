import React from 'react';
import Card from '../Card/Card';
import './Cards.scss';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  if (!confirmed) {
    return `Loading...`;
  }

  const date = new Date(lastUpdate).toDateString();

  return (
    <div className="Card-wrap">
      <Card data={confirmed} className="Card--infected"  title="Infected" date={date} info="Number of active cases of COVID-19" />
      <Card data={recovered} className="Card--recovered" title="Recovered" date={date} info="Number of recoveries from COVID-19" />
      <Card data={deaths} className="Card--deaths" title="Deaths" date={date} info="Number of deaths caused by COVID-19" />
    </div>
  )
};

export default Cards;
