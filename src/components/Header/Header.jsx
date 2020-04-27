import React from 'react';
import Logo from '../Logo/Logo';
import CountryPicker from '../CountryPicker/CountryPicker';
import styled from 'styled-components';

const HeaderWrap  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (min-width: 37.5rem) {
    flex-direction: row;
  }
`;

const Header = ({countries, handleCountryChange}) => ( 
  <HeaderWrap>
    <Logo />
    <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />
  </HeaderWrap>
);

export default Header;
