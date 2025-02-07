import React, { useState } from 'react'
import axios from 'axios';

const AddBond = () => {
    const [formData, setFormData] = useState({
        securityId: 0,
        securityDescription: '',
        securityName: '',
        assetType: '',
        investmentType: '',
        tradingFactor: 0,
        pricingFactor: 0,
        isin: '',
        bbgTicker: '',
        bbgUniqueId: '',
        cusip: '',
        sedol: '',
        firstCouponDate: '',
        cap: '',
        floor: '',
        couponFrequency: 0,
        coupon: 0,
        couponType: '',
        spread: '',
        callableFlag: '',
        fixToFloatFlag: '',
        putableFlag: '',
        issueDate: '',
        lastResetDate: '',
        maturity: '',
        callNotificationMaxDays: 0,
        putNotificationMaxDays: '',
        penultimateCouponDate: '',
        resetFrequency: '',
        hasPosition: '',
        macaulayDuration: 0,
        _30dVolatility: 0,
        _90dVolatility: 0,
        convexity: 0,
        _30dayAverageVolume: 0,
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
        bloombergIndustryGroup: '',
        bloombergIndustrySubGroup: '',
        bloombergIndustrySector: '',
        countryOfIssuance: '',
        issueCurrency: '',
        issuer: '',
        riskCurrency: '',
        putDate: '',
        putPrice: '',
        askPrice: 0,
        highPrice: 0,
        lowPrice: 0,
        openPrice: 0,
        volume: 0,
        bidPrice: 0,
        lastPrice: 0,
        callDate: '',
        callPrice: 0,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const submitHandler = (event) => {
        console.log(formData)

        axios.post(`https://localhost:7126/api/Bonds/Add`, formData)
            .then(response => {
                console.log(response.data);

                alert(`Bond ID: ${formData.securityId} Added Successfully!`)
            })
            .catch(error => {
                console.log(error)

                alert("Bond Could Not Be Added!")
            })

        event.preventDefault();
    }

  return (
    <div>
      <h2>Add New Bond</h2>
      <form onSubmit={submitHandler}>
        {/* First Row */}
        <div className="form-row">
            <div className="form-group">
            <label htmlFor="SecurityID">Security ID:</label>
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
            <label htmlFor="Has_Position">Asset Type:</label>
            <input type="text" id="assetType" name="assetType" value={formData.assetType} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label htmlFor="investmentType">Investment Type:</label>
            <input type="text" id="investmentType" name="investmentType" value={formData.investmentType} onChange={handleChange} required />
            </div>
        </div>

        {/* Second Row */}
        <div className="form-row">
            <div className="form-group">
            <label htmlFor="tradingFactor">Trading Factor:</label>
            <input type="number" id="tradingFactor" name="tradingFactor" value={formData.tradingFactor} onChange={handleChange} required/>
            </div>
            <div className="form-group">
            <label htmlFor="pricingFactor">Pricing Factor:</label>
            <input type="number" id="pricingFactor" name="pricingFactor" value={formData.pricingFactor} onChange={handleChange} required/>
            </div>
            <div className="form-group">
            <label htmlFor="isin">ISIN:</label>
            <input type="text" id="isin" name="isin" value={formData.isin} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="bbgTicker">BBG Ticker:</label>
            <input type="text" id="bbgTicker" name="bbgTicker" value={formData.bbgTicker} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="bbgUniqueId">BBG Unique ID:</label>
            <input type="text" id="bbgUniqueId" name="bbgUniqueId" value={formData.bbgUniqueId} onChange={handleChange} />
            </div>
        </div>

        {/* Third Row */}
        <div className="form-row">
            <div className="form-group">
            <label htmlFor="cusip">CUSIP:</label>
            <input type="text" id="cusip" name="cusip" value={formData.cusip} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label htmlFor="sedol">SEDOL:</label>
            <input type="text" id="sedol" name="sedol" value={formData.sedol} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label htmlFor="firstCouponDate">First Coupon Date:</label>
            <input type="date" id="firstCouponDate" name="firstCouponDate" value={formData.firstCouponDate} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="cap">Cap:</label>
            <input type="text" id="cap" name="cap" value={formData.cap} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label htmlFor="floor">Floor:</label>
            <input type="text" id="floor" name="floor" value={formData.floor} onChange={handleChange} required />
            </div>
        </div>

        {/* Fourth Row */}
        <div className="form-row">
            <div className='form-group'>
            <label htmlFor="couponFrequency">Coupon Frequency:</label>
            <input type="number" id="couponFrequency" name="couponFrequency" value={formData.couponFrequency} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="coupon">Coupon:</label>
            <input type="number" id="coupon" name="coupon" value={formData.coupon} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="couponType">Coupon Type:</label>
            <input type="text" id="couponType" name="couponType" value={formData.couponType} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="spread">Spread:</label>
            <input type="text" id="spread" name="spread" value={formData.spread} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="callableFlag">Callable Flag:</label>
            <input type="text" id="callableFlag" name="callableFlag" value={formData.callableFlag} onChange={handleChange} required />
            </div>
        </div>

        {/* Fifth Row */}
        <div className="form-row">
            <div className='form-group'>
            <label htmlFor="fixToFloatFlag">Fix to float flag:</label>
            <input type="text" id="fixToFloatFlag" name="fixToFloatFlag" value={formData.fixToFloatFlag} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="putableFlag">Putable Flag:</label>
            <input type="text" id="putableFlag" name="putableFlag" value={formData.putableFlag} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="issueDate">Issue Date:</label>
            <input type="date" id="issueDate" name="issueDate" value={formData.issueDate} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="lastResetDate">Last Reset Date:</label>
            <input type="date" id="lastResetDate" name="lastResetDate" value={formData.lastResetDate} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="maturity">Maturity:</label>
            <input type="date" id="maturity" name="maturity" value={formData.maturity} onChange={handleChange} />
            </div>
        </div>

        {/* Sixth Row */}
        <div className="form-row">
            <div className='form-group'>
            <label htmlFor="callNotificationMaxDays">Call Notfication Max Days:</label>
            <input type="number" step="0.01" id="callNotificationMaxDays" name="callNotificationMaxDays" value={formData.callNotificationMaxDays} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="putNotificationMaxDays">Put Notfication Max Days:</label>
            <input type="text" step="0.01" id="putNotificationMaxDays" name="putNotificationMaxDays" value={formData.putNotificationMaxDays} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="penultimateCouponDate">Penultimate Coupon Date:</label>
            <input type="date" step="0.01" id="penultimateCouponDate" name="penultimateCouponDate" value={formData.penultimateCouponDate} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="resetFrequency">Reset Frequency:</label>
            <input type="text" id="resetFrequency" name="resetFrequency" value={formData.resetFrequency} onChange={handleChange} required/>
            </div>
            <div className='form-group'>
            <label htmlFor="hasPosition">Has Position:</label>
            <input type="text" id="hasPosition" name="hasPosition" value={formData.hasPosition} onChange={handleChange} required/>
            </div>
        </div>

        {/* Seventh Row */}
        <div className="form-row">
            <div className='form-group'>
            <label htmlFor="macaulayDuration">Macaulay Duration:</label>
            <input type="number" id="macaulayDuration" name="macaulayDuration" value={formData.macaulayDuration} onChange={handleChange} required/>
            </div>
            <div className='form-group'>
            <label htmlFor="_30dVolatility">30D Volatility:</label>
            <input type="number" id="_30dVolatility" name="_30dVolatility" value={formData._30dVolatility} onChange={handleChange} required />
            </div>
            <div className='form-group'>
            <label htmlFor="_90dVolatility">90D Volatility:</label>
            <input type="number" id="_90dVolatility" name="_90dVolatility" value={formData._90dVolatility} onChange={handleChange} required />
            </div>
            <div className='form-group'>
            <label htmlFor="convexity">Convexity:</label>
            <input type="number" id="convexity" name="convexity" value={formData.convexity} onChange={handleChange} required />
            </div>
            <div className='form-group'>
            <label htmlFor="_30dayAverageissuer">30 Day Average Issuer:</label>
            <input type="number" id="_30dayAverageissuer" name="_30dayAverageissuer" value={formData._30dayAverageissuer} onChange={handleChange} />
            </div>
        </div>

        {/* Eigth Row */}
        <div className="form-row">
            <div className='form-group'>
            <label htmlFor="pfAssetClass">PF Asset Class:</label>
            <input type="text" id="pfAssetClass" name="pfAssetClass" value={formData.pfAssetClass} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="pfCountry">PF Country:</label>
            <input type="text" id="pfCountry" name="pfCountry" value={formData.pfCountry} onChange={handleChange} required />
            </div>
            <div className='form-group'>
            <label htmlFor="pfCreditRating">PF Credit Rating:</label>
            <input type="text" id="pfCreditRating" name="pfCreditRating" value={formData.pfCreditRating} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="pfCurrency">PF Currency:</label>
            <input type="text" id="pfCurrency" name="pfCurrency" value={formData.pfCurrency} onChange={handleChange} required/>
            </div>
            <div className='form-group'>
            <label htmlFor="pfInstrument">PF Instrument:</label>
            <input type="text" id="pfInstrument" name="pfInstrument" value={formData.pfInstrument} onChange={handleChange} required />
            </div>
        </div>

        {/* Ninth Row */}
        <div className="form-row">
            <div className='form-group'>
            <label htmlFor="pfLiquidityProfile">PF Liquidity Profile:</label>
            <input type="text" id="pfLiquidityProfile" name="pfLiquidityProfile" value={formData.pfLiquidityProfile} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="pfMaturity">PF Maturity:</label>
            <input type="text" id="pfMaturity" name="pfMaturity" value={formData.pfMaturity} onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label htmlFor="pfNaicsCode">PF NAICS Code:</label>
            <input type="text" id="pfNaicsCode" name="pfNaicsCode" value={formData.pfNaicsCode} onChange={handleChange} required/>
            </div>
            <div className='form-group'>
            <label htmlFor="pfRegion">PF Region:</label>
            <input type="text" id="pfRegion" name="pfRegion" value={formData.pfRegion} onChange={handleChange} required/>
            </div>
            <div className='form-group'>
            <label htmlFor="pfSector">PF Sector:</label>
            <input type="text" id="pfSector" name="pfSector" value={formData.pfSector} onChange={handleChange} required/>
            </div>
        </div>

        {/* Tenth Row */}
        <div className="form-row">
            <div>
            <label htmlFor="pfSubAssetClass">PF Sub-Asset Class:</label>
            <input type="text" id="pfSubAssetClass" name="pfSubAssetClass" value={formData.pfSubAssetClass} onChange={handleChange} required/>
            </div>
            <div>
            <label htmlFor="bloombergIndustryGroup">Bloomberg Industry Group:</label>
            <input type="text" id="bloombergIndustryGroup" name="bloombergIndustryGroup" value={formData.bloombergIndustryGroup} onChange={handleChange} required/>
            </div>
            <div>
            <label htmlFor="bloombergIndustrySubGroup">Bloomberg Industry Sub Group:</label>
            <input type="text" id="bloombergIndustrySubGroup" name="bloombergIndustrySubGroup" value={formData.bloombergIndustrySubGroup} onChange={handleChange} required/>
            </div>
            <div>
            <label htmlFor="bloombergIndustrySector">Bloomberg Industery Sector:</label>
            <input type="text" id="bloombergIndustrySector" name="bloombergIndustrySector" value={formData.bloombergIndustrySector} onChange={handleChange} required/>
            </div>
            <div>
            <label htmlFor="countryOfIssuance">Country of Issuance:</label>
            <input type="text" id="countryOfIssuance" name="countryOfIssuance" value={formData.countryOfIssuance} onChange={handleChange} />
            </div>
        </div>

        {/* Row 8 */}
        <div className="form-row">
            <div>
            <label htmlFor="issueCurrency">Issue Currency:</label>
            <input type="text" id="issueCurrency" name="issueCurrency" value={formData.issueCurrency} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="issuer">Issuer:</label>
            <input type="text" id="issuer" name="issuer" value={formData.issuer} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="riskCurrency">Risk Currency:</label>
            <input type="text" id="riskCurrency" name="riskCurrency" value={formData.riskCurrency} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="putDate">Put Date:</label>
            <input type="date" id="putDate" name="putDate" value={formData.putDate} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="putPrice">Put Price:</label>
            <input type="text" step="0.01" id="putPrice" name="putPrice" value={formData.putPrice} onChange={handleChange} />
            </div>
        </div>

        {/* Row 9 */}
        <div className="form-row">
            <div>
            <label htmlFor="askPrice">Ask Price:</label>
            <input type="number" id="askPrice" name="askPrice" value={formData.askPrice} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="highPrice">High Price:</label>
            <input type="number" id="highPrice" name="highPrice" value={formData.highPrice} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="lowPrice">Low Price:</label>
            <input type="number" id="lowPrice" name="lowPrice" value={formData.lowPrice} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="openPrice">Open Price:</label>
            <input type="number" id="openPrice" name="openPrice" value={formData.openPrice} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="volume">Volume:</label>
            <input type="number" id="volume" name="volume" value={formData.volume} onChange={handleChange} required />
            </div>
        </div>

        {/* Row 10 */}
        <div className="form-row">
            <div>
            <label htmlFor="bidPrice">Bid Price:</label>
            <input type="number" step="0.01" id="bidPrice" name="bidPrice" value={formData.bidPrice} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="lastPrice">Last Price:</label>
            <input type="number" id="lastPrice" name="lastPrice" value={formData.lastPrice} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="callDate">Call Date:</label>
            <input type="text" id="callDate" name="callDate" value={formData.callDate} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="callPrice">Call Price:</label>
            <input type="number" id="callPrice" name="callPrice" value={formData.callPrice} onChange={handleChange} required />
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

export default AddBond
