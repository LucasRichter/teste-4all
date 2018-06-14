import React from 'react'
import { string, number } from 'prop-types'
import styled from 'styled-components'
import { device } from '../../utils/mediaQueries';
import { kFormatter } from '../../utils/formatters';

const StyledWidget = styled.div`
  margin: 0 0 20px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
  }

  @media ${device.laptop} {
    width: calc(50% - 10px);
  }

  @media ${device.laptopL} {
    width: auto;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const StyledIcon = styled.div`
  padding: 10px 0;
  background-color: ${ props => {
    switch ( props.type ) {
      case 'newOrders':
        return '#0099FF'
      case 'comments':
        return '#FFCC66'
      case 'newUsers':
        return '#99FFCC'
      case 'pageViews':
        return '#FF3333'
      default:
        return ''
    }
  } };
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 50px;
  }

  @media ${device.tablet} {
    min-width: 50px;
    padding: 10px 20px;
  }
`

const StyledInfos = styled.div`
  padding: 20px 0;
  background-color: white;
  text-align: center;
  color: #666;

  h2 {
    font-size: 22px;
    font-weight: bold;
  }

  p {
    font-size: 15px;
    opacity: .7;
  }

  @media ${device.tablet} {
    padding: 20px;
    text-align: left;
    width: 100%
  }
`

const TYPES_TEXTS = {
  newOrders: 'New Orders',
  comments: 'Comments',
  newUsers: 'New Users',
  pageViews: 'Page Views'
}

const Widget = ( { type, quantity } ) =>
    <StyledWidget>
      <StyledIcon type={ type }>
        <img src={ require( `../../images/${type}.svg` ) }/>
      </StyledIcon>
      <StyledInfos>
        <h2>{ kFormatter( quantity ) }</h2>
        <p>{ TYPES_TEXTS[ type ] }</p>
      </StyledInfos>
    </StyledWidget>

Widget.propTypes = {
  quantity: number.isRequired,
  type: string.isRequired,
}

export default Widget
