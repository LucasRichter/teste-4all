import React from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Message from '../message'
import SendMessage from '../sendMessage'
import Loader from'../loader'

const StyledChat = styled.section`
  border-radius: 4px;
  overflow: hidden;
  max-width: 768px;
  width: 100%;
  margin: 20px 0;
  background-color: white;
`

const StyledMessages = styled.div`
  height: 200px;
  overflow-y: auto;
  padding: 10px 20px;
`

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  justify-content: flex-start;

  img {
    max-width: 35px;
    margin-right: 10px;
  }
`

const Chat = ( { chat } ) => {
  const entries = Object.entries(chat)
  return (
    <StyledChat>
      <StyledHeader>
        <img src={ require( '../../images/chat.svg' ) } />
        <h2>{ `Chat` }</h2>
      </StyledHeader>
      <StyledMessages>
        { !entries ? <Loader /> : entries.map( ( [ key, message ] ) =>
          <Message
            key={ key }
            message={ message }
          />
        ) }
      </StyledMessages>
      <SendMessage />
    </StyledChat>
  )
}

Chat.propTypes = {
  chat: object.isRequired,
}

const mapStateToProps = state => ( {
  chat: state.chat
} )

export default connect(
  mapStateToProps
)( Chat )
