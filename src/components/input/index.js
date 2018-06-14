import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
`

const Input = ( { onChange, value, placeholder } ) =>
  <StyledInput
    onChange={ onChange }
    placeholder={ placeholder }
    value={ value }
    type={ 'text' }
  />

Input.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  placeholder: string.isRequired,
}

export default Input
