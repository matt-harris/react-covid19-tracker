import React from 'react';
import CountUp from 'react-countup';
import './Card.scss';

const Card = ({data, className, title, date, info}) => (
  <div className={`Card ${className ? className : null}`}>
    <div className="Card__title">{title}</div>
    <div className="Card__count">
      <CountUp start={0} end={data.value} duration={2.5} separator="," />
    </div>
    <div className="Card__date">{date}</div>
    <div className="Card__info">{info}</div>
  </div>
)

export default Card;
