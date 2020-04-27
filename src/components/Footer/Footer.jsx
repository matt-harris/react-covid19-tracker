import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  font-size: 0.875rem;
  border-top: 0.0625rem solid #ddd;

  p {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  a {
    color: #333;
  }
`;

const Footer = () => (
  <FooterWrap>
    <p>Made by <a href="https://twitter.com/matty_h" rel="noopener noreferrer" target="_blank">@matty_h</a></p>
    |
    <p>Data from <a href="https://github.com/mathdroid/covid-19-api" rel="noopener noreferrer" target="_blank">COVID-19 API</a></p>
  </FooterWrap>
);

export default Footer;
