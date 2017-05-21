import { humility } from "../../theme/styleVariables";
import styled, { injectGlobal, css } from "styled-components";
import { fontFamilySansSerif } from "../../theme/styleVariables";
const logoSize = "40px";
const logoImage = require("./logo.png");
import { Link, IndexLink } from "react-router";

export const a = css`
  color: #337ab7;
  text-decoration: none;
  background-color: transparent;
`;

injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0 0 0 0;
    font-family: ${fontFamilySansSerif};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
  a {
      ${a}
  }  
  a:focus, a:hover {
    color: #23527c;
    text-decoration: underline;
  }  
  blockquote {
    padding: 0.6em 1.1em;
    margin: 0 0 1.1em;
    font-size: 1.1em;
    border-left: 5px solid #eee;
  }
`;

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  box-shadow: 0px 0px 12px 0px black;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 850px;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

export const navLinkStyle = css`
  ${a}
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6em 0.6em 0.6em 0.6em;
    &:hover, &:focus {
      text-decoration: none;
    }
`;

export const NavLink = styled(Link)`
  ${navLinkStyle}
`;

export const BrandLink = styled(IndexLink)`
  ${navLinkStyle}
`;

export const Container = styled.div`
  padding-top: 1em;
  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
`;

export const Content = styled.div`
  margin: 50px 0;  // for fixed navbar
  padding-top: 0.5rem;
  margin-left: 0.5em;
  margin-right: 0.5em;
  ${props => props.isHome && css`
    margin-top: 0px;
    margin-bottom: 50px;
  `}
`;

export const Brand = styled.div`
 display: inline-block;
 background: url(${logoImage}) no-repeat center center;
 width: ${logoSize};
 height: ${logoSize};
 background-size: 80%;
 margin: 0 10px 0 0;
`;

export const Footer = styled.footer`
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  text-align: center;
`;

export const Masthead = styled.div` 
  margin-top: 50px;
  background: #a1a1a1;
  padding: 40px 20px;
  color: white;
  text-align: center;
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 1.5em;
    margin: 20px;
  }
  a {
    color: #ddd;
  }
  p {
    margin: 10px;
  }    
`;

export const Logo = styled.div`
  margin: auto;
  height: 200px;
  width: 200px;
  vertical-align: middle;
  p {
    line-height: 200px;
    margin: 0px;
  }
  img {
    width: 75%;
    margin: auto;
  }
`;
