import React from 'react'
import SecuritySummaryTab from './equities/SecuritySummaryTab'
import EquityTabs from './equities/EquityTabs'

const Home = () => {
  return (
    <div>
      <h2>Security Master</h2>
      {/* <SecuritySummaryTab/> */}
      <EquityTabs/>
    </div>
  )
}

export default Home
