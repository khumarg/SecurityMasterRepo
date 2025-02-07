import React, { useState } from 'react'
import axios from 'axios'

const GetEquityByID = () => {
    const [equity, setEquity] = useState({})
    const [id, setId] = useState()

    const [msg, setMsg] = useState('')
    const [flag, setFlag] = useState(false)

    const clickHandler = (event) => {
        axios.get(`https://localhost:7126/api/Equities/${id}`)
            .then(res => {
                console.log(res.data)

                setMsg('')
                setFlag(true)

                setEquity(res.data)
            })
            .catch(error => {
                setMsg(`Could not found Equity ID: ${id}`)
                console.log(error.message)

                setFlag(false)
            })
        event.preventDefault();
    }

    if(flag === false) {
        return (
            <div>
                <h2>Get Equity By ID</h2>
                <form onSubmit={clickHandler}>
                    <label>Enter SecurityID: </label>
                    <input className='getByID-input-box' type='text' value={id} onChange={(event) => setId(event.target.value)} placeholder='Enter SecurityID'></input>
                    <button className='searchBtn' type='submit'>Search</button>
                </form>
                <h2>{msg}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Get Equity By ID</h2>
                <form onSubmit={clickHandler}>
                    <label>Enter Security ID: </label>
                    <input className='getByID-input-box' type='text' value={id} onChange={(event) => setId(event.target.value)} placeholder='Enter Security ID'></input>
                    <button className='searchBtn' type='submit'>Search</button>
                </form>
                <h2>{msg}</h2>
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
                            <td>{equity.securityId}</td>
                            <td>{equity.securityName}</td>
                            <td>{equity.securityDescription}</td>
                            <td>{equity.hasPosition}</td>
                            <td>{equity.isActiveSecurity}</td>
                            <td>{equity.lotSize}</td>
                            <td>{equity.bbgUniqueName}</td>
                            <td>{equity.cusip}</td>
                            <td>{equity.isin}</td>
                            <td>{equity.sedol}</td>
                            <td>{equity.bloombergTicker}</td>
                            <td>{equity.bloombergUniqueId}</td>
                            <td>{equity.bbgGlobalId}</td>
                            <td>{equity.tickerAndExchange}</td>
                            <td>{equity.isAdrFlag}</td>
                            <td>{equity.adrUnderlyingTicker}</td>
                            <td>{equity.adrUnderlyingCurrency}</td>
                            <td>{equity.sharesPerAdr}</td>
                            <td>{equity.ipoDate}</td>
                            <td>{equity.pricingCurrency}</td>
                            <td>{equity.settleDays}</td>
                            <td>{equity.totalSharesOutstanding}</td>
                            <td>{equity.votingRightsPerShare}</td>
                            <td>{equity.averageVolume20d}</td>
                            <td>{equity.beta}</td>
                            <td>{equity.shortInterest}</td>
                            <td>{equity.returnYtd}</td>
                            <td>{equity.volatility90d}</td>
                            <td>{equity.pfAssetClass}</td>
                            <td>{equity.pfCountry}</td>
                            <td>{equity.pfCreditRating}</td>
                            <td>{equity.pfCurrency}</td>
                            <td>{equity.pfInstrument}</td>
                            <td>{equity.pfLiquidityProfile}</td>
                            <td>{equity.pfMaturity}</td>
                            <td>{equity.pfNaicsCode}</td>
                            <td>{equity.pfRegion}</td>
                            <td>{equity.pfSector}</td>
                            <td>{equity.pfSubAssetClass}</td>
                            <td>{equity.countryOfIssuance}</td>
                            <td>{equity.exchange}</td>
                            <td>{equity.issuer}</td>
                            <td>{equity.issueCurrency}</td>
                            <td>{equity.tradingCurrency}</td>
                            <td>{equity.bbgIndustrySubGroup}</td>
                            <td>{equity.bloombergIndustryGroup}</td>
                            <td>{equity.bloombergSector}</td>
                            <td>{equity.countryOfIncorporation}</td>
                            <td>{equity.riskCurrency}</td>
                            <td>{equity.openPrice}</td>
                            <td>{equity.closePrice}</td>
                            <td>{equity.volume}</td>
                            <td>{equity.lastPrice}</td>
                            <td>{equity.askPrice}</td>
                            <td>{equity.bidPrice}</td>
                            <td>{equity.peRatio}</td>
                            <td>{equity.dividendDeclaredDate}</td>
                            <td>{equity.dividendExDate}</td>
                            <td>{equity.dividendRecordDate}</td>
                            <td>{equity.dividendPayDate}</td>
                            <td>{equity.dividendAmount}</td>
                            <td>{equity.frequency}</td>
                            <td>{equity.dividendType}</td>
                        </tr>              
                    </tbody>
                </table>
            </div>
          )
    }
}

export default GetEquityByID
