import React from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

const CardWrap = styled.div`
  padding: 1rem;
  border: 0.0625rem solid #ddd;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.2);
  border-bottom: 0.25rem solid ${props => props.highlight || '#ddd'};
`;

const CardTitle = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const CardCount = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
`;

const CardDate = styled.div`
  margin-bottom: 0.5rem;
`;

const CardInfo = styled.div`
  font-weight: 700;
`;


const Card = ({data, title, date, info, highlight}) => (
  <CardWrap highlight={highlight}>
    <CardTitle>{title}</CardTitle>
    <CardCount>
      <CountUp start={0} end={data.value} duration={2.5} separator="," />
    </CardCount>
    <CardDate>{date}</CardDate>
    <CardInfo>{info}</CardInfo>
  </CardWrap>
)

export default Card;
