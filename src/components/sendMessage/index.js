import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import Input from '../input'
import Button from '../button'
import styled from 'styled-components'
import { postMessage } from '../../__store__/chat/chat.actions'

const StyledSendMessage = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding: 10px 20px;
  overflow: hidden;
`

class SendMessage extends Component {
  static propTypes = {
    postMessage: func.isRequired,
  }

  state = {
    message: ''
  }

  handleChange = e => this.setState( { message: e.target.value } )
  onSubmit = () => {
    const { postMessage } = this.props
    const { message } = this.state

    postMessage( message )
    this.setState( { message: '' } )
  }

  render = () =>
      <StyledSendMessage>
        <Input
          placeholder={ `Type your message here...` }
          onChange={ this.handleChange }
          value={ this.state.message }
        />
        <Button
          onClick={ this.onSubmit }
          text={ `Send` }
        />
      </StyledSendMessage>
}

export default connect(
  null,
  { postMessage }
)( SendMessage )
