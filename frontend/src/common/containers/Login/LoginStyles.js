import styled from "styled-components";
import TextInput from "../../components/Inputs/TextInput";

export const SignInForm = styled.form`
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
      `;

export const Heading = styled.h2`
        margin-bottom: 10px; 
      `;

export const Input = styled(TextInput)`
      input {
        position: relative;
        height: auto;
        box-sizing: border-box;
        padding: 10px;
        font-size: 16px;
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      input:focus {
        z-index: 2;
      }
`;

export const PasswordInput = styled(Input)`
      input {
        margin-bottom: 10px;
        border-radius: 0 0 4px 4px;
      }`;
