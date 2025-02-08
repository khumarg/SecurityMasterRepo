import React, { useState } from 'react'
import axios from 'axios'

const GetBondsByID = () => {
    const [Bonds, setBonds] = useState({})
    const [id, setId] = useState()

    const [msg, setMsg] = useState('')
    const [flag, setFlag] = useState(false)

    const clickHandler = (event) => {
        axios.get(`https://localhost:7126/api/Bonds/${id}`)
            .then(res => {
                console.log(res.data)

                setMsg('')
                setFlag(true)

                setBonds(res.data)
            })
            .catch(error => {
                setMsg(`Could not find Bonds ID: ${id}`)
                console.log(error.message)

                setFlag(false)
            })
        event.preventDefault();
    }

    if(flag === false) {
        return (
            <div>
                <h2>Get Bond By ID</h2>
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
                <h2>Get Bonds By ID</h2>
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
                            <td>{Bonds.securityId}</td>
                            <td>{Bonds.securityName}</td>
                            <td>{Bonds.securityDescription}</td>
                            <td>{Bonds.hasPosition}</td>
                            <td>{Bonds.tradingFactor}</td>
                            <td>{Bonds.bbgUniqueId}</td>
                            <td>{Bonds.cusip}</td>
                            <td>{Bonds.isin}</td>
                            <td>{Bonds.sedol}</td>
                            <td>{Bonds.bbgTicker}</td>
                            <td>{Bonds.bbgUniqueId}</td>
                            <td>{Bonds.bbgUniqueId}</td>
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
                            <td>{Bonds.openPrice}</td>
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

export default GetBondsByID
