import React, { useState } from 'react'
import axios from 'axios'

const UpdateEquity = () => {
    const [id, setId] = useState()
    const [msg, setMsg] = useState('')
    const [data, setData] = useState({
      securityId: 0,
      securityName: '',
      securityDescription: '',
      hasPosition: '',
      isActiveSecurity: '',
      lotSize: 0,
      bbgUniqueName: '',
      cusip: '',
      isin: '',
      sedol: '',
      bloombergTicker: '',
      bloombergUniqueId: '',
      bbgGlobalId: '',
      tickerAndExchange: '',
      isAdrFlag: '',
      adrUnderlyingTicker: '',
      adrUnderlyingCurrency: '',
      sharesPerAdr: '',
      ipoDate: '',
      pricingCurrency: '',
      settleDays: 0,
      totalSharesOutstanding: 0.0,
      votingRightsPerShare: 0.0,
      averageVolume20d: 0.0,
      beta: 0.0,
      shortInterest: 0.0,
      returnYtd: 0.0,
      volatility90d: 0.0,
      pfAssetClass: '',
      pfCountry: '',
      pfCreditRating: '',
      pfCurrency: '',
      pfInstrument: '',
      pfLiquidityProfile: '',
      pfMaturity: '',
      pfNaicsCode: '',
      pfRegion: '',
      pfSector: '',
      pfSubAssetClass: '',
      countryOfIssuance: '',
      exchange: '',
      issuer: '',
      issueCurrency: '',
      tradingCurrency: '',
      bbgIndustrySubGroup: '',
      bloombergIndustryGroup: '',
      bloombergSector: '',
      countryOfIncorporation: '',
      riskCurrency: '',
      openPrice: 0.0,
      closePrice: 0.0,
      volume: 0.0,
      lastPrice: 0.0,
      askPrice: 0.0,
      bidPrice: 0.0,
      peRatio: 0.0,
      dividendDeclaredDate: '',
      dividendExDate: '',
      dividendRecordDate: '',
      dividendPayDate: '',
      dividendAmount: 0.0,
      frequency: '',
      dividendType: '',
    })

    const [flag, setFlag] = useState(false)

    const clickHandler = (event) => {
      axios.get(`https://localhost:7126/api/Equities/${id}`)
            .then(res => {
                console.log(res.data)
                setFlag(true)
                setMsg('')

                setData(res.data)
            })
            .catch(error => {
                console.log(error.message)

                setFlag(false)
                setMsg(`Could Not Found Equity ID: ${id}`)
            })
        event.preventDefault();
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const submitHandler = (event) => {
      axios.put(`https://localhost:7126/api/Equities/Edit/${id}`, data)
        .then(response => {
          console.log(response.data)

          setData(response.data)
          setFlag(true)

          alert(`Equity ID: ${id} Updated Successfully!`)
        })
        .catch(error => {
          console.log(error)
          setFlag(false)

          alert("Equity could not be updated!")
        })
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
          <h2>Update Equity</h2>
          <div>
              <form onSubmit={clickHandler}>
                  <label>Enter SecurityID: </label>
                  <input className='getByID-input-box' type='text' value={id} onChange={(event) => setId(event.target.value)} placeholder='Enter SecurityID'></input>
                  <button className='searchBtn' type='submit'>Search</button>
              </form>
          </div>
          <form onSubmit={submitHandler}>
            {/* First Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="SecurityID">SecurityID:</label>
                <input type="text" id="securityId" name="securityId" value={data.securityId} onChange={handleChange} readOnly/>
              </div>
              <div className="form-group">
                <label htmlFor="Security_Name">Security Name:</label>
                <input type="text" id="securityName" name="securityName" value={data.securityName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="Security_Description">Security Description:</label>
                <input type="text" id="securityDescription" name="securityDescription" value={data.securityDescription} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="Has_Position">Has Position:</label>
                {/* <input type="text" id="hasPosition" name="hasPosition" value={data.hasPosition} onChange={handleChange} required /> */}
                <select id="hasPosition" name="hasPosition" value={data.hasPosition} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="TRUE">TRUE</option>
                  <option value="FALSE">FALSE</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Is_Active_Security">Is Active Security:</label>
                {/* <input type="text" id="isActiveSecurity" name="isActiveSecurity" value={data.isActiveSecurity} onChange={handleChange} required /> */}
                <select id="isActiveSecurity" name="isActiveSecurity" value={data.isActiveSecurity} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="TRUE">TRUE</option>
                  <option value="FALSE">FALSE</option>
                </select>
              </div>
            </div>
    
            {/* Second Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="Lot_Size">Lot Size:</label>
                <input type="number" id="lotSize" name="lotSize" value={data.lotSize} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label htmlFor="BBG_Unique_Name">BBG Unique Name:</label>
                <input type="text" id="bbgUniqueName" name="bbgUniqueName" value={data.bbgUniqueName} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label htmlFor="CUSIP">CUSIP:</label>
                <input type="text" id="cusip" name="cusip" value={data.cusip} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="ISIN">ISIN:</label>
                <input type="text" id="isin" name="isin" value={data.isin} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="SEDOL">SEDOL:</label>
                <input type="text" id="sedol" name="sedol" value={data.sedol} onChange={handleChange} />
              </div>
            </div>
    
            {/* Third Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="Bloomberg_Ticker">Bloomberg Ticker:</label>
                <input type="text" id="bloombergTicker" name="bloombergTicker" value={data.bloombergTicker} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="Bloomberg_Unique_ID">Bloomberg Unique ID:</label>
                <input type="text" id="bloombergUniqueId" name="bloombergUniqueId" value={data.bloombergUniqueId} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="BBG_Global_ID">BBG Global ID:</label>
                <input type="text" id="bbgGlobalId" name="bbgGlobalId" value={data.bbgGlobalId} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="Ticker_and_Exchange">Ticker and Exchange:</label>
                <input type="text" id="tickerAndExchange" name="tickerAndExchange" value={data.tickerAndExchange} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="Is_ADR_Flag">Is ADR Flag:</label>
                {/* <input type="text" id="isAdrFlag" name="isAdrFlag" value={data.isAdrFlag} onChange={handleChange} required /> */}
                <select id="isAdrFlag" name="isAdrFlag" value={data.isAdrFlag} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="TRUE">TRUE</option>
                  <option value="FALSE">FALSE</option>
                </select>
              </div>
            </div>
    
            {/* Fourth Row */}
            <div className="form-row">
              <div className='form-group'>
              <label htmlFor="ADR_Underlying_Ticker">ADR Underlying Ticker:</label>
              <input type="text" id="adrUnderlyingTicker" name="adrUnderlyingTicker" value={data.adrUnderlyingTicker} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="ADR_Underlying_Currency">ADR Underlying Currency:</label>
                <input type="text" id="adrUnderlyingCurrency" name="adrUnderlyingCurrency" value={data.adrUnderlyingCurrency} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Shares_Per_ADR">Shares Per ADR:</label>
                <input type="text" id="sharesPerAdr" name="sharesPerAdr" value={data.sharesPerAdr} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="IPO_Date">IPO Date:</label>
                <input type="date" id="ipoDate" name="ipoDate" value={data.ipoDate} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Pricing_Currency">Pricing Currency:</label>
                <input type="text" id="pricingCurrency" name="pricingCurrency" value={data.pricingCurrency} onChange={handleChange} required />
              </div>
            </div>
    
            {/* Fifth Row */}
            <div className="form-row">
              <div className='form-group'>
                <label htmlFor="Settle_Days">Settle Days:</label>
                <input type="number" id="settleDays" name="settleDays" value={data.settleDays} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Total_Shares_Outstanding">Total Shares Outstanding:</label>
                <input type="number" step="0.01" id="totalSharesOutstanding" name="totalSharesOutstanding" value={data.totalSharesOutstanding} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Voting_Rights_Per_Share">Voting Rights Per Share:</label>
                <input type="number" step="0.01" id="votingRightsPerShare" name="votingRightsPerShare" value={data.votingRightsPerShare} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Average_Volume_20D">Average Volume 20D:</label>
                <input type="number" step="0.01" id="averageVolume20d" name="averageVolume20d" value={data.averageVolume20d} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Beta">Beta:</label>
                <input type="number" step="0.01" id="beta" name="beta" value={data.beta} onChange={handleChange} />
              </div>
            </div>
    
            {/* Sixth Row */}
            <div className="form-row">
              <div className='form-group'>
                <label htmlFor="Short_Interest">Short Interest:</label>
                <input type="number" step="0.01" id="shortInterest" name="shortInterest" value={data.shortInterest} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Return_YTD">Return YTD:</label>
                <input type="number" step="0.01" id="returnYtd" name="returnYtd" value={data.returnYtd} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Volatility_90D">Volatility 90D:</label>
                <input type="number" step="0.01" id="volatility90d" name="volatility90d" value={data.volatility90d} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Asset_Class">PF Asset Class:</label>
                <input type="text" id="pfAssetClass" name="pfAssetClass" value={data.pfAssetClass} onChange={handleChange} required/>
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Country">PF Country:</label>
                <input type="text" id="pfCountry" name="pfCountry" value={data.pfCountry} onChange={handleChange} required/>
              </div>
            </div>
    
            {/* Seventh Row */}
            <div className="form-row">
              <div className='form-group'>
                <label htmlFor="PF_Credit_Rating">PF Credit Rating:</label>
                <input type="text" id="pfCreditRating" name="pfCreditRating" value={data.pfCreditRating} onChange={handleChange} required/>
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Currency">PF Currency:</label>
                <input type="text" id="pfCurrency" name="pfCurrency" value={data.pfCurrency} onChange={handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Instrument">PF Instrument:</label>
                <input type="text" id="pfInstrument" name="pfInstrument" value={data.pfInstrument} onChange={handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Liquidity_Profile">PF Liquidity Profile:</label>
                <input type="text" id="pfLiquidityProfile" name="pfLiquidityProfile" value={data.pfLiquidityProfile} onChange={handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Maturity">PF Maturity:</label>
                <input type="text" id="pfMaturity" name="pfMaturity" value={data.pfMaturity} onChange={handleChange} />
              </div>
            </div>
    
            {/* Eigth Row */}
            <div className="form-row">
              <div className='form-group'>
                <label htmlFor="PF_NAICS_Code">PF NAICS Code:</label>
                <input type="text" id="pfNaicsCode" name="pfNaicsCode" value={data.pfNaicsCode} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Region">PF Region:</label>
                <input type="text" id="pfRegion" name="pfRegion" value={data.pfRegion} onChange={handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Sector">PF Sector:</label>
                <input type="text" id="pfSector" name="pfSector" value={data.pfSector} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="PF_Sub_Asset_Class">PF Sub Asset Class:</label>
                <input type="text" id="pfSubAssetClass" name="pfSubAssetClass" value={data.pfSubAssetClass} onChange={handleChange} required/>
              </div>
              <div className='form-group'>
                <label htmlFor="Country_of_Issuance">Country of Issuance:</label>
                <input type="text" id="countryOfIssuance" name="countryOfIssuance" value={data.countryOfIssuance} onChange={handleChange} required />
              </div>
            </div>
    
            {/* Ninth Row */}
            <div className="form-row">
              <div className='form-group'>
                <label htmlFor="Exchange">Exchange:</label>
                <input type="text" id="exchange" name="exchange" value={data.exchange} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Issuer">Issuer:</label>
                <input type="text" id="issuer" name="issuer" value={data.issuer} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor="Issue_Currency">Issue Currency:</label>
                <input type="text" id="issueCurrency" name="issueCurrency" value={data.issueCurrency} onChange={handleChange} required/>
              </div>
              <div className='form-group'>
                <label htmlFor="Trading_Currency">Trading Currency:</label>
                <input type="text" id="tradingCurrency" name="tradingCurrency" value={data.tradingCurrency} onChange={handleChange} required/>
              </div>
              <div className='form-group'>
                <label htmlFor="BBG_Industry_Sub_Group">BBG Industry Sub Group:</label>
                <input type="text" id="bbgIndustrySubGroup" name="bbgIndustrySubGroup" value={data.bbgIndustrySubGroup} onChange={handleChange} required/>
              </div>
            </div>
    
            {/* Tenth Row */}
            <div className="form-row">
              <div>
                <label htmlFor="Bloomberg_Industry_Group">Bloomberg Industry Group:</label>
                <input type="text" id="bloombergIndustryGroup" name="bloombergIndustryGroup" value={data.bloombergIndustryGroup} onChange={handleChange} required/>
              </div>
              <div>
                <label htmlFor="Bloomberg_Sector">Bloomberg Sector:</label>
                <input type="text" id="bloombergSector" name="bloombergSector" value={data.bloombergSector} onChange={handleChange} required/>
              </div>
              <div>
                <label htmlFor="Country_of_Incorporation">Country of Incorporation:</label>
                <input type="text" id="countryOfIncorporation" name="countryOfIncorporation" value={data.countryOfIncorporation} onChange={handleChange} required/>
              </div>
              <div>
                <label htmlFor="Risk_Currency">Risk Currency:</label>
                <input type="text" id="riskCurrency" name="riskCurrency" value={data.riskCurrency} onChange={handleChange} required/>
              </div>
              <div>
                <label htmlFor="Open_Price">Open Price:</label>
                <input type="number" step="0.01" id="openPrice" name="openPrice" value={data.openPrice} onChange={handleChange} />
              </div>
            </div>
    
            {/* Row 8 */}
            <div className="form-row">
              <div>
                <label htmlFor="Close_Price">Close Price:</label>
                <input type="number" step="0.01" id="closePrice" name="closePrice" value={data.closePrice} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Volume">Volume:</label>
                <input type="number" step="0.01" id="volume" name="volume" value={data.volume} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Last_Price">Last Price:</label>
                <input type="number" step="0.01" id="lastPrice" name="lastPrice" value={data.lastPrice} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Ask_Price">Ask Price:</label>
                <input type="number" step="0.01" id="askPrice" name="askPrice" value={data.askPrice} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Bid_Price">Bid Price:</label>
                <input type="number" step="0.01" id="bidPrice" name="bidPrice" value={data.bidPrice} onChange={handleChange} />
              </div>
            </div>
    
            {/* Row 9 */}
            <div className="form-row">
              <div>
                <label htmlFor="PE_Ratio">PE Ratio:</label>
                <input type="number" step="0.01" id="peRatio" name="peRatio" value={data.peRatio} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Dividend_Declared_Date">Dividend Declared Date:</label>
                <input type="date" id="dividendDeclaredDate" name="dividendDeclaredDate" value={data.dividendDeclaredDate} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="Dividend_Ex_Date">Dividend Ex Date:</label>
                <input type="date" id="dividendExDate" name="dividendExDate" value={data.dividendExDate} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="Dividend_Record_Date">Dividend Record Date:</label>
                <input type="date" id="dividendRecordDate" name="dividendRecordDate" value={data.dividendRecordDate} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="Dividend_Pay_Date">Dividend Pay Date:</label>
                <input type="date" id="dividendPayDate" name="dividendPayDate" value={data.dividendPayDate} onChange={handleChange} required />
              </div>
            </div>
    
            {/* Row 10 */}
            <div className="form-row">
              <div>
                <label htmlFor="Dividend_Amount">Dividend Amount:</label>
                <input type="number" step="0.01" id="dividendAmount" name="dividendAmount" value={data.dividendAmount} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Frequency">Frequency:</label>
                <input type="text" id="frequency" name="frequency" value={data.frequency} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="Dividend_Type">Dividend Type:</label>
                <input type="text" id="dividendType" name="dividendType" value={data.dividendType} onChange={handleChange} required />
              </div>
            </div>
    
            {/* Submit Button */}
            <div className="submit-container">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      )
    }
}

export default UpdateEquity
