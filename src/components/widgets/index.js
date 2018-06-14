import React from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import Widget from '../widget'
import styled, { css } from 'styled-components'
import { device } from '../../utils/mediaQueries';

const StyledWidgets = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Widgets = ( { widgets } ) =>
  <StyledWidgets>
      { Object.keys( widgets ).map( key => (
        <Widget
          quantity={ widgets[ key ] }
          key={ key }
          type={ key }
        />
      ) ) }
  </StyledWidgets>

Widgets.propTypes = {
  widgets: object.isRequired,
}

const mapStateToProps = state => ( {
  widgets: state.widgets
} )

export default connect(
  mapStateToProps,
)( Widgets )
