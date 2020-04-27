import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const CountrySelectWrap = styled.div`
  width: 100%;

  @media (min-width: 30rem) {
    width: 20rem;
  }
`;

const ReactSelectStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: '#ddd',
  })
}

const CountryPicker = ({ countries, handleCountryChange }) => {
  const selectOptions = [{label: 'Global', value: ''}, ...countries.map(country => (
    {
      label: country,
      value: country,
    }
  ))];

  return (
    <CountrySelectWrap>
      <Select
        styles={ReactSelectStyles}
        defaultValue={{ label: 'Global', value: '' }}
        isSearchable
        options={selectOptions}
        onChange={opt => handleCountryChange(opt.value)}
      />
    </CountrySelectWrap>
  );
};

export default CountryPicker;
