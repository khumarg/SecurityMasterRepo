import React from 'react'

const EquitiesTableView = (props) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>SecurityID</th>
                <th>Security_Name</th>
                <th>Security_Description</th>
                <th>Has_Position</th>
                <th>Is_Active_Security</th>
                <th>Lot_Size</th>
                <th>BBG_Unique_Name</th>
                <th>CUSIP</th>
                <th>ISIN</th>
                <th>SEDOL</th>
                <th>Bloomberg_Ticker</th>
                <th>Bloomberg_Unique_ID</th>
                <th>BBG_Global_ID</th>
                <th>Ticker_and_Exchange</th>
                <th>Is_ADR_Flag</th>
                <th>ADR_Underlying_Ticker</th>
                <th>ADR_Underlying_Currency</th>
                <th>Shares_Per_ADR</th>
                <th>IPO_Date</th>
                <th>Pricing_Currency</th>
                <th>Settle_Days</th>
                <th>Total_Shares_Outstanding</th>
                <th>Voting_Rights_Per_Share</th>
                <th>Average_Volume_20D</th>
                <th>Beta</th>
                <th>Short_Interest</th>
                <th>Return_YTD</th>
                <th>Volatility_90D</th>
                <th>PF_Asset_Class</th>
                <th>PF_Country</th>
                <th>PF_Credit_Rating</th>
                <th>PF_Currency</th>
                <th>PF_Instrument</th>
                <th>PF_Liquidity_Profile</th>
                <th>PF_Maturity</th>
                <th>PF_NAICS_Code</th>
                <th>PF_Region</th>
                <th>PF_Sector</th>
                <th>PF_Sub_Asset_Class</th>
                <th>Country_of_Issuance</th>
                <th>Exchange</th>
                <th>Issuer</th>
                <th>Issue_Currency</th>
                <th>Trading_Currency</th>
                <th>BBG_Industry_Sub_Group</th>
                <th>Bloomberg_Industry_Group</th>
                <th>Bloomberg_Sector</th>
                <th>Country_of_Incorporation</th>
                <th>Risk_Currency</th>
                <th>Open_Price</th>
                <th>Close_Price</th>
                <th>Volume</th>
                <th>Last_Price</th>
                <th>Ask_Price</th>
                <th>Bid_Price</th>
                <th>PE_Ratio</th>
                <th>Dividend_Declared_Date</th>
                <th>Dividend_Ex_Date</th>
                <th>Dividend_Record_Date</th>
                <th>Dividend_Pay_Date</th>
                <th>Dividend_Amount</th>
                <th>Frequency</th>
                <th>Dividend_Type</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <td>{props.equity.securityId}</td>
                    <td>{props.equity.securityName}</td>
                    <td>International Business Machines Corp</td>
                    <td>TRUE</td>
                    <td>TRUE</td>
                    <td>100</td>
                    <td>IBM US</td>
                    <td>459200101</td>
                    <td>US4592001014</td>
                    <td>2005973</td>
                    <td>IBM</td>
                    <td>EQ0010080100001000</td>
                    <td>BBG000BLNNH6</td>
                    <td>IBM US</td>
                    <td>FALSE</td>
                    <td>NULL</td>
                    <td>NULL</td>
                    <td>NULL</td>
                    <td>NULL</td>
                    <td>USD</td>
                    <td>2</td>
                    <td>989660480</td>
                    <td>1</td>
                    <td>5956690</td>
                    <td>0.73</td>
                    <td>21437944</td>
                    <td>-10.36</td>
                    <td>18.67</td>
                    <td>Equity</td>
                    <td>United States of America</td>
                    <td>AA+</td>
                    <td>USD</td>
                    <td>Securities</td>
                    <td>&lt;7 Days</td>
                    <td>NULL</td>
                    <td>NULL</td>
                    <td>North America</td>
                    <td>NULL</td>
                    <td>Other listed equity</td>
                    <td>UNITED STATES</td>
                    <td>Multi-Listed US Exchanges</td>
                    <td>IBM</td>
                    <td>USD</td>
                    <td>USD</td>
                    <td>Computer Software</td>
                    <td>Computers</td>
                    <td>Technology</td>
                    <td>UNITED STATES</td>
                    <td>USD</td>
                    <td>164.16</td>
                    <td>164.16</td>
                    <td>3817529</td>
                    <td>164.16</td>
                    <td>187.67</td>
                    <td>187.66</td>
                    <td>9.76</td>
                    <td>2015-01-01</td>
                    <td>2015-01-15</td>
                    <td>2015-01-20</td>
                    <td>2015-02-01</td>
                    <td>1.12</td>
                    <td>NULL</td>
                    <td>Cash</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EquitiesTableView
