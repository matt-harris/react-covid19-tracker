import React from 'react';
import Select from 'react-select';
import './CountryPicker.scss';

const CountryPicker = ({ countries, handleCountryChange }) => {
  const selectOptions = [{label: 'Global', value: ''}, ...countries.map(country => (
    {
      label: country,
      value: country,
    }
  ))];

  return (
    <div className="CountryPicker">
      <Select
        classNamePrefix="CountryPicker"
        defaultValue={{ label: 'Global', value: '' }}
        isSearchable
        options={selectOptions}
        onChange={opt => handleCountryChange(opt.value)}
      />
    </div>
  );
};

export default CountryPicker;
