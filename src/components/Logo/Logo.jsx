import React from 'react';
import styled from 'styled-components';

const LogoHeading = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 900;

  @media (min-width: 37.5rem) {
    margin-right: 1rem;
    margin-bottom: 0;
  }

  @media (min-width: 48rem) {
    font-size: 3rem;
  }
`;

const Logo = () => ( 
  <LogoHeading>Covid-19 Tracker</LogoHeading>
);

export default Logo;
