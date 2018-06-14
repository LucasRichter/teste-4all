import React, { Component } from 'react'
import Widgets from './components/widgets'
import Chat from './components/chat'
import PageViews from './components/pageViews'
import { connect } from 'react-redux';
import { initilizeApp } from './__store__/index.actions';
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import styled from 'styled-components'

const ResetStyles = () => injectGlobal`
  ${reset}

  body {
    background-color: #CCC;
    font-family: 'Roboto', sans-serif;
  }
`

const H1 = styled.h1`
  margin: 20px 0;
  font-size: 40px;
  color: #666;
`

const StyledMain = styled.section`
  margin: 0 10px;
`

class App extends Component {
  componentDidMount = () => {
    ResetStyles()
    this.props.initilizeApp()
  }

  render = () => (
    <StyledMain>
      <H1>{ `Dashboard` }</H1>
      <Widgets />
      <PageViews />
      <Chat />
    </StyledMain>
  )
}

export default connect(
  null,
  { initilizeApp }
)( App )