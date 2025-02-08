import React, { useState } from 'react'
import axios from 'axios'

const AddEquity = () => {

  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const submitHandler = (event) => {
    console.log(formData)

    axios.post(`https://localhost:7126/api/Equities/Add`, formData)
      .then(response => {
        console.log(response.data);

        alert(`Equity ID: ${formData.securityId} Added Successfully!`)
      })
      .catch(error => {
        console.log(error)

        alert("Equity Could Not Be Added!")
      })

    event.preventDefault();
  }
    
  return (
    <div>
      <h2>Add New Equity</h2>
      <form onSubmit={submitHandler}>
      {/* First Row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="SecurityID">SecurityID:</label>
          <input type="text" id="securityId" name="securityId" value={formData.securityId} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="Security_Name">Security Name:</label>
          <input type="text" id="securityName" name="securityName" value={formData.securityName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Security_Description">Security Description:</label>
          <input type="text" id="securityDescription" name="securityDescription" value={formData.securityDescription} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Has_Position">Has Position:</label>
          <input type="text" id="hasPosition" name="hasPosition" value={formData.hasPosition} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Is_Active_Security">Is Active Security:</label>
          <input type="text" id="isActiveSecurity" name="isActiveSecurity" value={formData.isActiveSecurity} onChange={handleChange} required />
        </div>
      </div>

      {/* Second Row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="Lot_Size">Lot Size:</label>
          <input type="number" id="lotSize" name="lotSize" value={formData.lotSize} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="BBG_Unique_Name">BBG Unique Name:</label>
          <input type="text" id="bbgUniqueName" name="bbgUniqueName" value={formData.bbgUniqueName} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="CUSIP">CUSIP:</label>
          <input type="text" id="cusip" name="cusip" value={formData.cusip} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="ISIN">ISIN:</label>
          <input type="text" id="isin" name="isin" value={formData.isin} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="SEDOL">SEDOL:</label>
          <input type="text" id="sedol" name="sedol" value={formData.sedol} onChange={handleChange} />
        </div>
      </div>

      {/* Third Row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="Bloomberg_Ticker">Bloomberg Ticker:</label>
          <input type="text" id="bloombergTicker" name="bloombergTicker" value={formData.bloombergTicker} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Bloomberg_Unique_ID">Bloomberg Unique ID:</label>
          <input type="text" id="bloombergUniqueId" name="bloombergUniqueId" value={formData.bloombergUniqueId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="BBG_Global_ID">BBG Global ID:</label>
          <input type="text" id="bbgGlobalId" name="bbgGlobalId" value={formData.bbgGlobalId} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Ticker_and_Exchange">Ticker and Exchange:</label>
          <input type="text" id="tickerAndExchange" name="tickerAndExchange" value={formData.tickerAndExchange} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Is_ADR_Flag">Is ADR Flag:</label>
          <input type="text" id="isAdrFlag" name="isAdrFlag" value={formData.isAdrFlag} onChange={handleChange} required />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="form-row">
        <div className='form-group'>
        <label htmlFor="ADR_Underlying_Ticker">ADR Underlying Ticker:</label>
        <input type="text" id="adrUnderlyingTicker" name="adrUnderlyingTicker" value={formData.adrUnderlyingTicker} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="ADR_Underlying_Currency">ADR Underlying Currency:</label>
          <input type="text" id="adrUnderlyingCurrency" name="adrUnderlyingCurrency" value={formData.adrUnderlyingCurrency} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Shares_Per_ADR">Shares Per ADR:</label>
          <input type="text" id="sharesPerAdr" name="sharesPerAdr" value={formData.sharesPerAdr} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="IPO_Date">IPO Date:</label>
          <input type="date" id="ipoDate" name="ipoDate" value={formData.ipoDate} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Pricing_Currency">Pricing Currency:</label>
          <input type="text" id="pricingCurrency" name="pricingCurrency" value={formData.pricingCurrency} onChange={handleChange} required />
        </div>
      </div>

      {/* Fifth Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="Settle_Days">Settle Days:</label>
          <input type="number" id="settleDays" name="settleDays" value={formData.settleDays} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Total_Shares_Outstanding">Total Shares Outstanding:</label>
          <input type="number" step="0.01" id="totalSharesOutstanding" name="totalSharesOutstanding" value={formData.totalSharesOutstanding} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Voting_Rights_Per_Share">Voting Rights Per Share:</label>
          <input type="number" step="0.01" id="votingRightsPerShare" name="votingRightsPerShare" value={formData.votingRightsPerShare} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Average_Volume_20D">Average Volume 20D:</label>
          <input type="number" step="0.01" id="averageVolume20d" name="averageVolume20d" value={formData.averageVolume20d} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Beta">Beta:</label>
          <input type="number" step="0.01" id="beta" name="beta" value={formData.beta} onChange={handleChange} />
        </div>
      </div>

      {/* Sixth Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="Short_Interest">Short Interest:</label>
          <input type="number" step="0.01" id="shortInterest" name="shortInterest" value={formData.shortInterest} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Return_YTD">Return YTD:</label>
          <input type="number" step="0.01" id="returnYtd" name="returnYtd" value={formData.returnYtd} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Volatility_90D">Volatility 90D:</label>
          <input type="number" step="0.01" id="volatility90d" name="volatility90d" value={formData.volatility90d} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Asset_Class">PF Asset Class:</label>
          <input type="text" id="pfAssetClass" name="pfAssetClass" value={formData.pfAssetClass} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Country">PF Country:</label>
          <input type="text" id="pfCountry" name="pfCountry" value={formData.pfCountry} onChange={handleChange} required/>
        </div>
      </div>

      {/* Seventh Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="PF_Credit_Rating">PF Credit Rating:</label>
          <input type="text" id="pfCreditRating" name="pfCreditRating" value={formData.pfCreditRating} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Currency">PF Currency:</label>
          <input type="text" id="pfCurrency" name="pfCurrency" value={formData.pfCurrency} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Instrument">PF Instrument:</label>
          <input type="text" id="pfInstrument" name="pfInstrument" value={formData.pfInstrument} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Liquidity_Profile">PF Liquidity Profile:</label>
          <input type="text" id="pfLiquidityProfile" name="pfLiquidityProfile" value={formData.pfLiquidityProfile} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Maturity">PF Maturity:</label>
          <input type="text" id="pfMaturity" name="pfMaturity" value={formData.pfMaturity} onChange={handleChange} />
        </div>
      </div>

      {/* Eigth Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="PF_NAICS_Code">PF NAICS Code:</label>
          <input type="text" id="pfNaicsCode" name="pfNaicsCode" value={formData.pfNaicsCode} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Region">PF Region:</label>
          <input type="text" id="pfRegion" name="pfRegion" value={formData.pfRegion} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Sector">PF Sector:</label>
          <input type="text" id="pfSector" name="pfSector" value={formData.pfSector} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Sub_Asset_Class">PF Sub Asset Class:</label>
          <input type="text" id="pfSubAssetClass" name="pfSubAssetClass" value={formData.pfSubAssetClass} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="Country_of_Issuance">Country of Issuance:</label>
          <input type="text" id="countryOfIssuance" name="countryOfIssuance" value={formData.countryOfIssuance} onChange={handleChange} required />
        </div>
      </div>

      {/* Ninth Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="Exchange">Exchange:</label>
          <input type="text" id="exchange" name="exchange" value={formData.exchange} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Issuer">Issuer:</label>
          <input type="text" id="issuer" name="issuer" value={formData.issuer} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Issue_Currency">Issue Currency:</label>
          <input type="text" id="issueCurrency" name="issueCurrency" value={formData.issueCurrency} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="Trading_Currency">Trading Currency:</label>
          <input type="text" id="tradingCurrency" name="tradingCurrency" value={formData.tradingCurrency} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="BBG_Industry_Sub_Group">BBG Industry Sub Group:</label>
          <input type="text" id="bbgIndustrySubGroup" name="bbgIndustrySubGroup" value={formData.bbgIndustrySubGroup} onChange={handleChange} required/>
        </div>
      </div>

      {/* Tenth Row */}
      <div className="form-row">
        <div>
          <label htmlFor="Bloomberg_Industry_Group">Bloomberg Industry Group:</label>
          <input type="text" id="bloombergIndustryGroup" name="bloombergIndustryGroup" value={formData.bloombergIndustryGroup} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="Bloomberg_Sector">Bloomberg Sector:</label>
          <input type="text" id="bloombergSector" name="bloombergSector" value={formData.bloombergSector} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="Country_of_Incorporation">Country of Incorporation:</label>
          <input type="text" id="countryOfIncorporation" name="countryOfIncorporation" value={formData.countryOfIncorporation} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="Risk_Currency">Risk Currency:</label>
          <input type="text" id="riskCurrency" name="riskCurrency" value={formData.riskCurrency} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="Open_Price">Open Price:</label>
          <input type="number" step="0.01" id="openPrice" name="openPrice" value={formData.openPrice} onChange={handleChange} />
        </div>
      </div>

      {/* Row 8 */}
      <div className="form-row">
        <div>
          <label htmlFor="Close_Price">Close Price:</label>
          <input type="number" step="0.01" id="closePrice" name="closePrice" value={formData.closePrice} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Volume">Volume:</label>
          <input type="number" step="0.01" id="volume" name="volume" value={formData.volume} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Last_Price">Last Price:</label>
          <input type="number" step="0.01" id="lastPrice" name="lastPrice" value={formData.lastPrice} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Ask_Price">Ask Price:</label>
          <input type="number" step="0.01" id="askPrice" name="askPrice" value={formData.askPrice} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Bid_Price">Bid Price:</label>
          <input type="number" step="0.01" id="bidPrice" name="bidPrice" value={formData.bidPrice} onChange={handleChange} />
        </div>
      </div>

      {/* Row 9 */}
      <div className="form-row">
        <div>
          <label htmlFor="PE_Ratio">PE Ratio:</label>
          <input type="number" step="0.01" id="peRatio" name="peRatio" value={formData.peRatio} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Dividend_Declared_Date">Dividend Declared Date:</label>
          <input type="date" id="dividendDeclaredDate" name="dividendDeclaredDate" value={formData.dividendDeclaredDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="Dividend_Ex_Date">Dividend Ex Date:</label>
          <input type="date" id="dividendExDate" name="dividendExDate" value={formData.dividendExDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="Dividend_Record_Date">Dividend Record Date:</label>
          <input type="date" id="dividendRecordDate" name="dividendRecordDate" value={formData.dividendRecordDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="Dividend_Pay_Date">Dividend Pay Date:</label>
          <input type="date" id="dividendPayDate" name="dividendPayDate" value={formData.dividendPayDate} onChange={handleChange} required />
        </div>
      </div>

      {/* Row 10 */}
      <div className="form-row">
        <div>
          <label htmlFor="Dividend_Amount">Dividend Amount:</label>
          <input type="number" step="0.01" id="dividendAmount" name="dividendAmount" value={formData.dividendAmount} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Frequency">Frequency:</label>
          <input type="text" id="frequency" name="frequency" value={formData.frequency} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Dividend_Type">Dividend Type:</label>
          <input type="text" id="dividendType" name="dividendType" value={formData.dividendType} onChange={handleChange} required />
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

export default AddEquity
