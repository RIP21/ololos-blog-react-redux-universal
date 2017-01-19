import styled from 'styled-components';
import {humility} from '../../theme/styleVariables';

const size = '200px';
//eslint-disable-next-line
export const StyledHome = styled.div`
dd {
    margin-bottom: 15px;
}
.masthead {
  background: #a1a1a1;
  padding: 40px 20px;
  color: white;
  text-align: center;
  .logo {
    
    margin: auto;
    height: ${size};
    width: ${size};
    border-radius: ${size} / 2;
    vertical-align: middle;
    p {
      line-height: ${size};
      margin: 0px;
    }
    img {
      width: 75%;
      margin: auto;
    }
  }
  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 2em;
    margin: 20px;
  }
  a {
    color: #ddd;
  }
  p {
    margin: 10px;
  }
  .humility {
    color: ${humility};
    a {
      color: ${humility};
    }
  }
} `;
