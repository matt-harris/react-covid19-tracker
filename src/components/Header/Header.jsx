import React from 'react';
import Logo from '../Logo/Logo';
import CountryPicker from '../CountryPicker/CountryPicker';
import './Header.scss';

const Header = ({countries, handleCountryChange}) => ( 
  <header className="Header" >
    <Logo />
    <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />
  </header>
);

export default Header;