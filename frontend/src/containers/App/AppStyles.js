import styled from 'styled-components';

const size = '40px';
const logoImage = require('../Home/logo.png');

export const StyledApp = styled.div`
  .brand {
     position: absolute;
     top: 5px;
     left: 5px;
     display: inline-block;
     background: url(${logoImage}) no-repeat center center;
     width: ${size};
     height: ${size};
     background-size: 80%;
     margin: 0 10px 0 0;
     border-radius: ${size} / 2;
  }
  nav :global(.fa) {
    font-size: 2em;
    line-height: 20px;
  }`;


export const AppContent = styled.div`
    margin: 50px 0; // for fixed navbar
`;
