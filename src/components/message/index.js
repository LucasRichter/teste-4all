import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

const StyledMessage = styled.div`
  display: flex;
  flex-direction: ${ ( { left } ) => left ? 'row' : 'row-reverse' };
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #ccc;
`

const StyledProfile = styled.img`
  background-color: orange;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  flex-shrink: 0;
  margin-right: ${ ( { left } ) => left ? '10px' : '0' };
  margin-left: ${ ( { left } ) => left ? '0' : '10px' };
`

const StyledContent = styled.div`
  color: #ccc;
  width: 100%;

  h2 {
    font-size: 15px;
    font-weight: bold;
  }

  span {
    font-weight: lighter;
    font-size: 10px;
    padding-left: 5px;
  }

  p {
    font-size: 12px;
  }
`

const Message = ( { message } ) =>
  <StyledMessage left={ message.displayPortraitLeft } >
    <StyledProfile
      left={ message.displayPortraitLeft }
      src={ message.portrait }
    />
    <StyledContent>
      <h2>
        { message.userName }
        <span>{ message.time }</span>
      </h2>
      <p>{ message.message }</p>
    </StyledContent>
  </StyledMessage>

Message.propTypes = {
  message: object.isRequired,
}

export default Message
