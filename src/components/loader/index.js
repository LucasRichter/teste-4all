import React from 'react'
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export default styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: auto;

  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #ccc;
    border-color: #ccc transparent #ccc transparent;
    animation: ${rotate360} 1.2s linear infinite;
  }
`

