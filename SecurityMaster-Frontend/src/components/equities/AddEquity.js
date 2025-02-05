import React, { useState } from 'react'
import axios from 'axios'

const AddEquity = () => {

  const [formData, setFormData] = useState({
    securityId: 0,
    SecurityName: '',
    SecurityDescription: '',
    HasPosition: '',
    IsActiveSecurity: '',
    Lot_Size: 0,
    BbgUniqueName: '',
    CUSIP: '',
    ISIN: '',
    SEDOL: '',
    BloombergTicker: '',
    BloombergUniqueId: '',
    BBG_Global_ID: '',
    TickerAndExchange: '',
    IsAdrFlag: '',
    ADR_Underlying_Ticker: '',
    ADR_Underlying_Currency: '',
    Shares_Per_ADR: '',
    IPO_Date: '',
    PricingCurrency: '',
    Settle_Days: 0,
    Total_Shares_Outstanding: 0.0,
    Voting_Rights_Per_Share: 0.0,
    Average_Volume_20D: 0.0,
    Beta: 0.0,
    Short_Interest: 0.0,
    Return_YTD: 0.0,
    Volatility_90D: 0.0,
    PfAssetClass: '',
    PfCountry: '',
    PfCreditRating: '',
    PfCurrency: '',
    PfInstrument: '',
    PfLiquidityProfile: '',
    PF_Maturity: '',
    PF_NAICS_Code: '',
    PfRegion: '',
    PF_Sector: '',
    PfSubAssetClass: '',
    CountryOfIssuance: '',
    Exchange: '',
    Issuer: '',
    IssueCurrency: '',
    TradingCurrency: '',
    BbgIndustrySubGroup: '',
    BloombergIndustryGroup: '',
    BloombergSector: '',
    CountryOfIncorporation: '',
    RiskCurrency: '',
    Open_Price: 0.0,
    Close_Price: 0.0,
    Volume: 0.0,
    Last_Price: 0.0,
    Ask_Price: 0.0,
    Bid_Price: 0.0,
    PE_Ratio: 0.0,
    DividendDeclaredDate: '',
    DividendExDate: '',
    DividendRecordDate: '',
    DividendPayDate: '',
    Dividend_Amount: 0.0,
    Frequency: '',
    DividendType: '',
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
          <input type="text" id="SecurityID" name="securityId" value={formData.securityId} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="Security_Name">Security Name:</label>
          <input type="text" id="Security_Name" name="SecurityName" value={formData.SecurityName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Security_Description">Security Description:</label>
          <input type="text" id="Security_Description" name="SecurityDescription" value={formData.SecurityDescription} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Has_Position">Has Position:</label>
          <input type="text" id="Has_Position" name="HasPosition" value={formData.HasPosition} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Is_Active_Security">Is Active Security:</label>
          <input type="text" id="Is_Active_Security" name="IsActiveSecurity" value={formData.IsActiveSecurity} onChange={handleChange} required />
        </div>
      </div>

      {/* Second Row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="Lot_Size">Lot Size:</label>
          <input type="text" id="Lot_Size" name="Lot_Size" value={formData.Lot_Size} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="BBG_Unique_Name">BBG Unique Name:</label>
          <input type="text" id="BBG_Unique_Name" name="BbgUniqueName" value={formData.BbgUniqueName} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="CUSIP">CUSIP:</label>
          <input type="text" id="CUSIP" name="CUSIP" value={formData.CUSIP} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="ISIN">ISIN:</label>
          <input type="text" id="ISIN" name="ISIN" value={formData.ISIN} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="SEDOL">SEDOL:</label>
          <input type="text" id="SEDOL" name="SEDOL" value={formData.SEDOL} onChange={handleChange} />
        </div>
      </div>

      {/* Third Row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="Bloomberg_Ticker">Bloomberg Ticker:</label>
          <input type="text" id="Bloomberg_Ticker" name="BloombergTicker" value={formData.BloombergTicker} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Bloomberg_Unique_ID">Bloomberg Unique ID:</label>
          <input type="text" id="Bloomberg_Unique_ID" name="BloombergUniqueId" value={formData.BloombergUniqueId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="BBG_Global_ID">BBG Global ID:</label>
          <input type="text" id="BBG_Global_ID" name="BBG_Global_ID" value={formData.BBG_Global_ID} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Ticker_and_Exchange">Ticker and Exchange:</label>
          <input type="text" id="Ticker_and_Exchange" name="TickerAndExchange" value={formData.TickerAndExchange} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Is_ADR_Flag">Is ADR Flag:</label>
          <input type="text" id="Is_ADR_Flag" name="IsAdrFlag" value={formData.IsAdrFlag} onChange={handleChange} required />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="form-row">
        <div className='form-group'>
        <label htmlFor="ADR_Underlying_Ticker">ADR Underlying Ticker:</label>
        <input type="text" id="ADR_Underlying_Ticker" name="ADR_Underlying_Ticker" value={formData.ADR_Underlying_Ticker} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="ADR_Underlying_Currency">ADR Underlying Currency:</label>
          <input type="text" id="ADR_Underlying_Currency" name="ADR_Underlying_Currency" value={formData.ADR_Underlying_Currency} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Shares_Per_ADR">Shares Per ADR:</label>
          <input type="text" id="Shares_Per_ADR" name="Shares_Per_ADR" value={formData.Shares_Per_ADR} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="IPO_Date">IPO Date:</label>
          <input type="date" id="IPO_Date" name="IPO_Date" value={formData.IPO_Date} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Pricing_Currency">Pricing Currency:</label>
          <input type="text" id="Pricing_Currency" name="PricingCurrency" value={formData.PricingCurrency} onChange={handleChange} required />
        </div>
      </div>

      {/* Fifth Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="Settle_Days">Settle Days:</label>
          <input type="number" id="Settle_Days" name="Settle_Days" value={formData.Settle_Days} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Total_Shares_Outstanding">Total Shares Outstanding:</label>
          <input type="number" step="0.01" id="Total_Shares_Outstanding" name="Total_Shares_Outstanding" value={formData.Total_Shares_Outstanding} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Voting_Rights_Per_Share">Voting Rights Per Share:</label>
          <input type="number" step="0.01" id="Voting_Rights_Per_Share" name="Voting_Rights_Per_Share" value={formData.Voting_Rights_Per_Share} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Average_Volume_20D">Average Volume 20D:</label>
          <input type="number" step="0.01" id="Average_Volume_20D" name="Average_Volume_20D" value={formData.Average_Volume_20D} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Beta">Beta:</label>
          <input type="number" step="0.01" id="Beta" name="Beta" value={formData.Beta} onChange={handleChange} />
        </div>
      </div>

      {/* Sixth Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="Short_Interest">Short Interest:</label>
          <input type="number" step="0.01" id="Short_Interest" name="Short_Interest" value={formData.Short_Interest} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Return_YTD">Return YTD:</label>
          <input type="number" step="0.01" id="Return_YTD" name="Return_YTD" value={formData.Return_YTD} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Volatility_90D">Volatility 90D:</label>
          <input type="number" step="0.01" id="Volatility_90D" name="Volatility_90D" value={formData.Volatility_90D} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Asset_Class">PF Asset Class:</label>
          <input type="text" id="PF_Asset_Class" name="PfAssetClass" value={formData.PfAssetClass} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Country">PF Country:</label>
          <input type="text" id="PF_Country" name="PfCountry" value={formData.PfCountry} onChange={handleChange} required/>
        </div>
      </div>

      {/* Seventh Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="PF_Credit_Rating">PF Credit Rating:</label>
          <input type="text" id="PF_Credit_Rating" name="PfCreditRating" value={formData.PfCreditRating} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Currency">PF Currency:</label>
          <input type="text" id="PF_Currency" name="PfCurrency" value={formData.PfCurrency} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Instrument">PF Instrument:</label>
          <input type="text" id="PF_Instrument" name="PfInstrument" value={formData.PfInstrument} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Liquidity_Profile">PF Liquidity Profile:</label>
          <input type="text" id="PF_Liquidity_Profile" name="PfLiquidityProfile" value={formData.PfLiquidityProfile} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Maturity">PF Maturity:</label>
          <input type="text" id="PF_Maturity" name="PF_Maturity" value={formData.PF_Maturity} onChange={handleChange} />
        </div>
      </div>

      {/* Eigth Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="PF_NAICS_Code">PF NAICS Code:</label>
          <input type="text" id="PF_NAICS_Code" name="PF_NAICS_Code" value={formData.PF_NAICS_Code} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Region">PF Region:</label>
          <input type="text" id="PF_Region" name="PfRegion" value={formData.PfRegion} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Sector">PF Sector:</label>
          <input type="text" id="PF_Sector" name="PF_Sector" value={formData.PF_Sector} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="PF_Sub_Asset_Class">PF Sub Asset Class:</label>
          <input type="text" id="PF_Sub_Asset_Class" name="PfSubAssetClass" value={formData.PfSubAssetClass} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="Country_of_Issuance">Country of Issuance:</label>
          <input type="text" id="Country_of_Issuance" name="CountryOfIssuance" value={formData.CountryOfIssuance} onChange={handleChange} required />
        </div>
      </div>

      {/* Ninth Row */}
      <div className="form-row">
        <div className='form-group'>
          <label htmlFor="Exchange">Exchange:</label>
          <input type="text" id="Exchange" name="Exchange" value={formData.Exchange} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Issuer">Issuer:</label>
          <input type="text" id="Issuer" name="Issuer" value={formData.Issuer} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="Issue_Currency">Issue Currency:</label>
          <input type="text" id="Issue_Currency" name="IssueCurrency" value={formData.IssueCurrency} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="Trading_Currency">Trading Currency:</label>
          <input type="text" id="Trading_Currency" name="TradingCurrency" value={formData.TradingCurrency} onChange={handleChange} required/>
        </div>
        <div className='form-group'>
          <label htmlFor="BBG_Industry_Sub_Group">BBG Industry Sub Group:</label>
          <input type="text" id="BBG_Industry_Sub_Group" name="BbgIndustrySubGroup" value={formData.BbgIndustrySubGroup} onChange={handleChange} required/>
        </div>
      </div>

      {/* Tenth Row */}
      <div className="form-row">
        <div>
          <label htmlFor="Bloomberg_Industry_Group">Bloomberg Industry Group:</label>
          <input type="text" id="Bloomberg_Industry_Group" name="BloombergIndustryGroup" value={formData.BloombergIndustryGroup} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="Bloomberg_Sector">Bloomberg Sector:</label>
          <input type="text" id="Bloomberg_Sector" name="BloombergSector" value={formData.BloombergSector} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="Country_of_Incorporation">Country of Incorporation:</label>
          <input type="text" id="Country_of_Incorporation" name="CountryOfIncorporation" value={formData.CountryOfIncorporation} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="Risk_Currency">Risk Currency:</label>
          <input type="text" id="Risk_Currency" name="RiskCurrency" value={formData.RiskCurrency} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="Open_Price">Open Price:</label>
          <input type="number" step="0.01" id="Open_Price" name="Open_Price" value={formData.Open_Price} onChange={handleChange} />
        </div>
      </div>

      {/* Row 8 */}
      <div className="form-row">
        <div>
          <label htmlFor="Close_Price">Close Price:</label>
          <input type="number" step="0.01" id="Close_Price" name="Close_Price" value={formData.Close_Price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Volume">Volume:</label>
          <input type="number" step="0.01" id="Volume" name="Volume" value={formData.Volume} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Last_Price">Last Price:</label>
          <input type="number" step="0.01" id="Last_Price" name="Last_Price" value={formData.Last_Price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Ask_Price">Ask Price:</label>
          <input type="number" step="0.01" id="Ask_Price" name="Ask_Price" value={formData.Ask_Price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Bid_Price">Bid Price:</label>
          <input type="number" step="0.01" id="Bid_Price" name="Bid_Price" value={formData.Bid_Price} onChange={handleChange} />
        </div>
      </div>

      {/* Row 9 */}
      <div className="form-row">
        <div>
          <label htmlFor="PE_Ratio">PE Ratio:</label>
          <input type="number" step="0.01" id="PE_Ratio" name="PE_Ratio" value={formData.PE_Ratio} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Dividend_Declared_Date">Dividend Declared Date:</label>
          <input type="date" id="Dividend_Declared_Date" name="DividendDeclaredDate" value={formData.DividendDeclaredDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="Dividend_Ex_Date">Dividend Ex Date:</label>
          <input type="date" id="Dividend_Ex_Date" name="DividendExDate" value={formData.DividendExDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="Dividend_Record_Date">Dividend Record Date:</label>
          <input type="date" id="Dividend_Record_Date" name="DividendRecordDate" value={formData.DividendRecordDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="Dividend_Pay_Date">Dividend Pay Date:</label>
          <input type="date" id="Dividend_Pay_Date" name="DividendPayDate" value={formData.DividendPayDate} onChange={handleChange} required />
        </div>
      </div>

      {/* Row 10 */}
      <div className="form-row">
        <div>
          <label htmlFor="Dividend_Amount">Dividend Amount:</label>
          <input type="number" step="0.01" id="Dividend_Amount" name="Dividend_Amount" value={formData.Dividend_Amount} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Frequency">Frequency:</label>
          <input type="text" id="Frequency" name="Frequency" value={formData.Frequency} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Dividend_Type">Dividend Type:</label>
          <input type="text" id="Dividend_Type" name="DividendType" value={formData.DividendType} onChange={handleChange} required />
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-row">
        <button type="submit" className="submit-button">Submit</button>
      </div>
      </form>
    </div>
  )
}

export default AddEquity
