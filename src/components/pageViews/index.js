import React from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'
import { AreaChart, ResponsiveContainer, Area, Tooltip, CartesianGrid, XAxis, YAxis, linearGradient } from 'recharts'
import styled from 'styled-components';

const StyledChart = styled.section`
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;

  h3 {
    font-size: 24px;
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
`

const PageViews = ( { pageViews } ) =>
  <StyledChart>
    <h3>{ `Site Traffic Overview` }</h3>
    <ResponsiveContainer height={500}>
      <AreaChart
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        data={pageViews}
      >
        <defs>
          <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis dataKey="views" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="views" stroke="#8884d8" fillOpacity={1} fill="url(#colorViews)" />
        <Area type="monotone" dataKey="views" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </ResponsiveContainer>
  </StyledChart>

PageViews.propTypes = {
  pageViews: array.isRequired,
}

const mapStateToProps = state => ( {
  pageViews: Object.values( state.pageViews )
} )

export default connect(
  mapStateToProps
)( PageViews )
