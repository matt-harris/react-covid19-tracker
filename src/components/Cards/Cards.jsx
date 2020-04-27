import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;

  & > div:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 37.5rem) {
    flex-direction: row;

    & > div:not(:last-child) {
      margin-right: 1.5rem;
      margin-bottom: 0;
    }
  }
`;

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  if (!confirmed) {
    return `Loading...`;
  }

  const date = new Date(lastUpdate).toDateString();

  return (
    <CardsWrap>
      <Card data={confirmed} highlight="#247ba0" title="Infected" date={date} info="Number of active cases of COVID-19" />
      <Card data={recovered} highlight="#70c1b3" title="Recovered" date={date} info="Number of recoveries from COVID-19" />
      <Card data={deaths} highlight="#ff1654" title="Deaths" date={date} info="Number of deaths caused by COVID-19" />
    </CardsWrap>
  )
};

export default Cards;
