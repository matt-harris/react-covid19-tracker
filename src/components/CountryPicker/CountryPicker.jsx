import React from 'react';
import './CountryPicker.scss';

const CountryPicker = ({countries, handleCountryChange}) => (
    <div className="CountryPicker">
        <select className="CountryPicker__select" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {
              countries.map((country, i) => <option value={country} key={i}>{country}</option>)
            }
        </select>
    </div>
);

export default CountryPicker;
