import styled from 'styled-components';
import React from 'react';

const ButtonStyled = styled.button`
  outline: none;
  border: 2px solid white;
  padding: 15px 57px;
  font-size: 18px;
  background: transparent;
  transition: color 1s, background 1s;
  color: white;
  
  &:hover{
      background: linear-gradient(225deg, #004C97 0%, #090909 100.05%);
  }
`;
export const Button = (props) => {
    return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}