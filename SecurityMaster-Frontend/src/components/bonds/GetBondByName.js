import React, { useState } from 'react'
import axios from 'axios'

const GetBondByName = () => {
    const [bonds, setBond] = useState({})
    const [sname, setSname] = useState()
    const [flag, setFlag] = useState(false)

    const[msg, setMsg] = useState('')

    const clickHandler = (event) => {
        axios.get(`https://localhost:7126/api/Bonds/${sname}`)
            .then(res => {
                console.log(res.data)
                setBond(res.data)
                
                setMsg('')
                setFlag(true)
            })
            .catch(error => {
                setMsg(`Could not find Security Name: ${sname}`)
                console.log(error.message)

                setFlag(false)
            })
        event.preventDefault();
    }

    if(flag === false) {
        return (
            <div>
                <h2>Get Bond By Name</h2>
                <form onSubmit={clickHandler}>
                    <label>Enter Security Name: </label>
                    <input className='getByID-input-box' type='text' value={sname} onChange={(event) => setSname(event.target.value)} placeholder='Enter Security Name'></input>
                    <button className='searchBtn' type='submit'>Search</button>
                </form>
                <h2>{msg}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Get Bond By Security Name</h2>
                <form onSubmit={clickHandler}>
                    <label>Enter Security Name: </label>
                    <input className='getByID-input-box' type='text' value={sname} onChange={(event) => setSname(event.target.value)} placeholder='Enter SecurityName'></input>
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
                            <th>Lot_Size</th>
                            <th>BBG_Unique_Name</th>
                            <th>CUSIP</th>
                            <th>ISIN</th>
                            <th>SEDOL</th>
                            <th>Bloomberg_Ticker</th>
                            <th>Bloomberg_Unique_ID</th>
                            <th>BBG_Global_ID</th>
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
                            <th>Bloomberg_Industry_Group</th>
                            <th>Bloomberg_Industry_Sub_Group</th>
                            <th>Bloomberg_Sector</th>
                            <th>Country_of_Issuance</th>
                            <th>Issuer</th>
                            <th>Issue_Currency</th>
                            <th>Risk_Currency</th>
                            <th>Open_Price</th>
                            <th>Close_Price</th>
                            <th>Volume</th>
                            <th>Last_Price</th>
                            <th>Ask_Price</th>
                            <th>Bid_Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{bonds.securityId}</td>
                            <td>{bonds.securityName}</td>
                            <td>{bonds.securityDescription}</td>
                            <td>{bonds.hasPosition}</td>
                            <td>{bonds.isActiveSecurity}</td>
                            <td>{bonds.lotSize}</td>
                            <td>{bonds.bbgUniqueName}</td>
                            <td>{bonds.cusip}</td>
                            <td>{bonds.isin}</td>
                            <td>{bonds.sedol}</td>
                            <td>{bonds.bloombergTicker}</td>
                            <td>{bonds.bloombergUniqueId}</td>
                            <td>{bonds.bbgGlobalId}</td>
                            <td>{bonds.tickerAndExchange}</td>
                            <td>{bonds.isAdrFlag}</td>
                            <td>{bonds.adrUnderlyingTicker}</td>
                            <td>{bonds.adrUnderlyingCurrency}</td>
                            <td>{bonds.sharesPerAdr}</td>
                            <td>{bonds.ipoDate}</td>
                            <td>{bonds.pricingCurrency}</td>
                            <td>{bonds.settleDays}</td>
                            <td>{bonds.totalSharesOutstanding}</td>
                            <td>{bonds.votingRightsPerShare}</td>
                            <td>{bonds.averageVolume20d}</td>
                            <td>{bonds.beta}</td>
                            <td>{bonds.shortInterest}</td>
                            <td>{bonds.returnYtd}</td>
                            <td>{bonds.volatility90d}</td>
                            <td>{bonds.pfAssetClass}</td>
                            <td>{bonds.pfCountry}</td>
                            <td>{bonds.pfCreditRating}</td>
                            <td>{bonds.pfCurrency}</td>
                            <td>{bonds.pfInstrument}</td>
                            <td>{bonds.pfLiquidityProfile}</td>
                            <td>{bonds.pfMaturity}</td>
                            <td>{bonds.pfNaicsCode}</td>
                            <td>{bonds.pfRegion}</td>
                            <td>{bonds.pfSector}</td>
                            <td>{bonds.pfSubAssetClass}</td>
                            <td>{bonds.countryOfIssuance}</td>
                            <td>{bonds.exchange}</td>
                            <td>{bonds.issuer}</td>
                            <td>{bonds.issueCurrency}</td>
                            <td>{bonds.tradingCurrency}</td>
                            <td>{bonds.bbgIndustrySubGroup}</td>
                            <td>{bonds.bloombergIndustryGroup}</td>
                            <td>{bonds.bloombergSector}</td>
                            <td>{bonds.countryOfIncorporation}</td>
                            <td>{bonds.riskCurrency}</td>
                            <td>{bonds.openPrice}</td>
                            <td>{bonds.closePrice}</td>
                            <td>{bonds.volume}</td>
                            <td>{bonds.lastPrice}</td>
                            <td>{bonds.askPrice}</td>
                            <td>{bonds.bidPrice}</td>
                            <td>{bonds.peRatio}</td>
                            <td>{bonds.dividendDeclaredDate}</td>
                            <td>{bonds.dividendExDate}</td>
                            <td>{bonds.dividendRecordDate}</td>
                            <td>{bonds.dividendPayDate}</td>
                            <td>{bonds.dividendAmount}</td>
                            <td>{bonds.frequency}</td>
                            <td>{bonds.dividendType}</td>
                        </tr>              
                    </tbody>
                </table>
            </div>
          )
    }
}

export default GetBondByName