import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #33FF66;
  padding: 5px 10px;
  color: white;
  border: 0;
`

const Button = ( { onClick, text } ) =>
  <StyledButton onClick={onClick}>
    { text }
  </StyledButton>

Button.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
}

export default Button
