import React, { useState } from 'react'
import axios from 'axios'

const GetBondByName = () => {
    const [Bonds, setBond] = useState({})
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
        
                {/* <table>
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
                </table> */}
                <table>
                    <thead>
                        <tr>
                            <th>SecurityID</th>
                            <th>Security_Name</th>
                            <th>Security_Description</th>
                            <th>Asset_Type</th>
                            <th>Investment_Type</th>
                            <th>Trading_Factor</th>
                            <th>Pricing_Factor</th>
                            <th>ISIN</th>
                            <th>BBG_Ticker</th>
                            <th>BBG_Unique_ID</th>
                            <th>CUSIP</th>
                            <th>SEDOL</th>
                            <th>First_Coupon_Date</th>
                            <th>Cap</th>
                            <th>Floor</th>
                            <th>Coupon_Frequency</th>
                            <th>Coupon</th>
                            <th>Coupon_Type</th>
                            <th>Spread</th>
                            <th>Callable_Flag</th>
                            <th>Fix_To_Float_Flag</th>
                            <th>Putable_Flag</th>
                            <th>Issue_Date</th>
                            <th>Last_Reset_Date</th>
                            <th>Maturity</th>
                            <th>Call_Notification_Max_Days</th>
                            <th>Put_Notification_Max_Days</th>
                            <th>Penultimate_Coupon_Date</th>
                            <th>Reset_Frequency</th>
                            <th>Has_Position</th>
                            <th>Macaulay_Duration</th>
                            <th>30d_Volatility</th>
                            <th>90d_Volatility</th>
                            <th>Convexity</th>
                            <th>30day_Average_Volume</th>
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
                            <th>Put_Date</th>
                            <th>Put_Price</th>
                            <th>Call_Date</th>
                            <th>Call_Price</th>
                            <th>Open_Price</th>
                            <th>High_Price</th>
                            <th>Low_Price</th>
                            <th>Close_Price</th>
                            <th>Volume</th>
                            <th>Last_Price</th>
                            <th>Ask_Price</th>
                            <th>Bid_Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Bonds.securityId}</td>
                            <td>{Bonds.securityName}</td>
                            <td>{Bonds.securityDescription}</td>
                            <td>{Bonds.assetType}</td>
                            <td>{Bonds.investmentType}</td>
                            <td>{Bonds.tradingFactor}</td>
                            <td>{Bonds.pricingFactor}</td>
                            <td>{Bonds.isin}</td>
                            <td>{Bonds.bbgTicker}</td>
                            <td>{Bonds.bbgUniqueId}</td>
                            <td>{Bonds.cusip}</td>
                            <td>{Bonds.sedol}</td>
                            <td>{Bonds.firstCouponDate}</td>
                            <td>{Bonds.cap}</td>
                            <td>{Bonds.floor}</td>
                            <td>{Bonds.couponFrequency}</td>
                            <td>{Bonds.coupon}</td>
                            <td>{Bonds.couponType}</td>
                            <td>{Bonds.spread}</td>
                            <td>{Bonds.callableFlag}</td>
                            <td>{Bonds.fixToFloatFlag}</td>
                            <td>{Bonds.putableFlag}</td>
                            <td>{Bonds.issueDate}</td>
                            <td>{Bonds.lastResetDate}</td>
                            <td>{Bonds.maturity}</td>
                            <td>{Bonds.callNotificationMaxDays}</td>
                            <td>{Bonds.putNotificationMaxDays}</td>
                            <td>{Bonds.penultimateCouponDate}</td>
                            <td>{Bonds.resetFrequency}</td>
                            <td>{Bonds.hasPosition}</td>
                            <td>{Bonds.macaulayDuration}</td>
                            <td>{Bonds._30dVolatility}</td>
                            <td>{Bonds._90dVolatility}</td>
                            <td>{Bonds.convexity}</td>
                            <td>{Bonds._30dayAverageVolume}</td>
                            <td>{Bonds.pfAssetClass}</td>
                            <td>{Bonds.pfCountry}</td>
                            <td>{Bonds.pfCreditRating}</td>
                            <td>{Bonds.pfCurrency}</td>
                            <td>{Bonds.pfInstrument}</td>
                            <td>{Bonds.pfLiquidityProfile}</td>
                            <td>{Bonds.pfMaturity}</td>
                            <td>{Bonds.pfNaicsCode}</td>
                            <td>{Bonds.pfRegion}</td>
                            <td>{Bonds.pfSector}</td>
                            <td>{Bonds.pfSubAssetClass}</td>
                            <td>{Bonds.bloombergIndustryGroup}</td>
                            <td>{Bonds.bloombergIndustrySubGroup}</td>
                            <td>{Bonds.bloombergIndustrySector}</td>
                            <td>{Bonds.countryOfIssuance}</td>
                            <td>{Bonds.issuer}</td>
                            <td>{Bonds.issueCurrency}</td>
                            <td>{Bonds.riskCurrency}</td>
                            <td>{Bonds.putDate}</td>
                            <td>{Bonds.putPrice}</td>
                            <td>{Bonds.callDate}</td>
                            <td>{Bonds.callPrice}</td>
                            <td>{Bonds.openPrice}</td>
                            <td>{Bonds.highPrice}</td>
                            <td>{Bonds.lowPrice}</td>
                            <td>{Bonds.lastPrice}</td>
                            <td>{Bonds.volume}</td>
                            <td>{Bonds.lastPrice}</td>
                            <td>{Bonds.askPrice}</td>
                            <td>{Bonds.bidPrice}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
          )
    }
}

export default GetBondByName