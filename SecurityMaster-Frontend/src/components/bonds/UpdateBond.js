import React, { useState } from 'react'
import axios from 'axios'

const UpdateBond = () => {
    const [id, setId] = useState()
    const [msg, setMsg] = useState('')
    const [data, setData] = useState({
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

    const [flag, setFlag] = useState(false)

    const clickHandler = (event) => {
      axios.get(`https://localhost:7126/api/Bonds/${id}`)
            .then(res => {
                console.log(res.data)
                setFlag(true)
                setMsg('')

                setData(res.data)
            })
            .catch(error => {
                console.log(error.message)

                setFlag(false)
                setMsg(`Could Not Found Bond ID: ${id}`)
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
      axios.put(`https://localhost:7126/api/Bonds/Edit/${id}`, data)
        .then(response => {
          console.log(response.data)

          setData(response.data)
          setFlag(true)

          alert(`BondUpdateBond ID: ${id} Updated Successfully!`)
        })
        .catch(error => {
          console.log(error)
          setFlag(false)

          alert("BondUpdateBond could not be updated!")
        })
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
          <h2>Update Bond</h2>
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
                <label htmlFor="SecurityID">Security ID:</label>
                <input type="text" id="securityId" name="securityId" value={data.securityId} onChange={handleChange} required/>
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
                <label htmlFor="Has_Position">Asset Type:</label>
                <input type="text" id="assetType" name="assetType" value={data.assetType} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="investmentType">Investment Type:</label>
                <input type="text" id="investmentType" name="investmentType" value={data.investmentType} onChange={handleChange} required />
                </div>
            </div>

            {/* Second Row */}
            <div className="form-row">
                <div className="form-group">
                <label htmlFor="tradingFactor">Trading Factor:</label>
                <input type="number" id="tradingFactor" name="tradingFactor" value={data.tradingFactor} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                <label htmlFor="pricingFactor">Pricing Factor:</label>
                <input type="number" id="pricingFactor" name="pricingFactor" value={data.pricingFactor} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                <label htmlFor="isin">ISIN:</label>
                <input type="text" id="isin" name="isin" value={data.isin} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="bbgTicker">BBG Ticker:</label>
                <input type="text" id="bbgTicker" name="bbgTicker" value={data.bbgTicker} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="bbgUniqueId">BBG Unique ID:</label>
                <input type="text" id="bbgUniqueId" name="bbgUniqueId" value={data.bbgUniqueId} onChange={handleChange} />
                </div>
            </div>

            {/* Third Row */}
            <div className="form-row">
                <div className="form-group">
                <label htmlFor="cusip">CUSIP:</label>
                <input type="text" id="cusip" name="cusip" value={data.cusip} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="sedol">SEDOL:</label>
                <input type="text" id="sedol" name="sedol" value={data.sedol} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="firstCouponDate">First Coupon Date:</label>
                <input type="date" id="firstCouponDate" name="firstCouponDate" value={data.firstCouponDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="cap">Cap:</label>
                <input type="text" id="cap" name="cap" value={data.cap} onChange={handleChange} required />
                </div>
                <div className="form-group">
                <label htmlFor="floor">Floor:</label>
                <input type="text" id="floor" name="floor" value={data.floor} onChange={handleChange} required />
                </div>
            </div>

            {/* Fourth Row */}
            <div className="form-row">
                <div className='form-group'>
                <label htmlFor="couponFrequency">Coupon Frequency:</label>
                <input type="number" id="couponFrequency" name="couponFrequency" value={data.couponFrequency} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="coupon">Coupon:</label>
                <input type="number" id="coupon" name="coupon" value={data.coupon} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="couponType">Coupon Type:</label>
                <input type="text" id="couponType" name="couponType" value={data.couponType} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="spread">Spread:</label>
                <input type="text" id="spread" name="spread" value={data.spread} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="callableFlag">Callable Flag:</label>
                <input type="text" id="callableFlag" name="callableFlag" value={data.callableFlag} onChange={handleChange} required />
                </div>
            </div>

            {/* Fifth Row */}
            <div className="form-row">
                <div className='form-group'>
                <label htmlFor="fixToFloatFlag">Fix to float flag:</label>
                <input type="text" id="fixToFloatFlag" name="fixToFloatFlag" value={data.fixToFloatFlag} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="putableFlag">Putable Flag:</label>
                <input type="text" id="putableFlag" name="putableFlag" value={data.putableFlag} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="issueDate">Issue Date:</label>
                <input type="date" id="issueDate" name="issueDate" value={data.issueDate} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="lastResetDate">Last Reset Date:</label>
                <input type="date" id="lastResetDate" name="lastResetDate" value={data.lastResetDate} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="maturity">Maturity:</label>
                <input type="date" id="maturity" name="maturity" value={data.maturity} onChange={handleChange} />
                </div>
            </div>

            {/* Sixth Row */}
            <div className="form-row">
                <div className='form-group'>
                <label htmlFor="callNotificationMaxDays">Call Notfication Max Days:</label>
                <input type="number" step="0.01" id="callNotificationMaxDays" name="callNotificationMaxDays" value={data.callNotificationMaxDays} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="putNotificationMaxDays">Put Notfication Max Days:</label>
                <input type="text" step="0.01" id="putNotificationMaxDays" name="putNotificationMaxDays" value={data.putNotificationMaxDays} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="penultimateCouponDate">Penultimate Coupon Date:</label>
                <input type="date" step="0.01" id="penultimateCouponDate" name="penultimateCouponDate" value={data.penultimateCouponDate} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="resetFrequency">Reset Frequency:</label>
                <input type="text" id="resetFrequency" name="resetFrequency" value={data.resetFrequency} onChange={handleChange} required/>
                </div>
                <div className='form-group'>
                <label htmlFor="hasPosition">Has Position:</label>
                <input type="text" id="hasPosition" name="hasPosition" value={data.hasPosition} onChange={handleChange} required/>
                </div>
            </div>

            {/* Seventh Row */}
            <div className="form-row">
                <div className='form-group'>
                <label htmlFor="macaulayDuration">Macaulay Duration:</label>
                <input type="number" id="macaulayDuration" name="macaulayDuration" value={data.macaulayDuration} onChange={handleChange} required/>
                </div>
                <div className='form-group'>
                <label htmlFor="_30dVolatility">30D Volatility:</label>
                <input type="number" id="_30dVolatility" name="_30dVolatility" value={data._30dVolatility} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                <label htmlFor="_90dVolatility">90D Volatility:</label>
                <input type="number" id="_90dVolatility" name="_90dVolatility" value={data._90dVolatility} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                <label htmlFor="convexity">Convexity:</label>
                <input type="number" id="convexity" name="convexity" value={data.convexity} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                <label htmlFor="_30dayAverageissuer">30 Day Average Issuer:</label>
                <input type="number" id="_30dayAverageissuer" name="_30dayAverageissuer" value={data._30dayAverageissuer} onChange={handleChange} />
                </div>
            </div>

            {/* Eigth Row */}
            <div className="form-row">
                <div className='form-group'>
                <label htmlFor="pfAssetClass">PF Asset Class:</label>
                <input type="text" id="pfAssetClass" name="pfAssetClass" value={data.pfAssetClass} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="pfCountry">PF Country:</label>
                <input type="text" id="pfCountry" name="pfCountry" value={data.pfCountry} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                <label htmlFor="pfCreditRating">PF Credit Rating:</label>
                <input type="text" id="pfCreditRating" name="pfCreditRating" value={data.pfCreditRating} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="pfCurrency">PF Currency:</label>
                <input type="text" id="pfCurrency" name="pfCurrency" value={data.pfCurrency} onChange={handleChange} required/>
                </div>
                <div className='form-group'>
                <label htmlFor="pfInstrument">PF Instrument:</label>
                <input type="text" id="pfInstrument" name="pfInstrument" value={data.pfInstrument} onChange={handleChange} required />
                </div>
            </div>

            {/* Ninth Row */}
            <div className="form-row">
                <div className='form-group'>
                <label htmlFor="pfLiquidityProfile">PF Liquidity Profile:</label>
                <input type="text" id="pfLiquidityProfile" name="pfLiquidityProfile" value={data.pfLiquidityProfile} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="pfMaturity">PF Maturity:</label>
                <input type="text" id="pfMaturity" name="pfMaturity" value={data.pfMaturity} onChange={handleChange} />
                </div>
                <div className='form-group'>
                <label htmlFor="pfNaicsCode">PF NAICS Code:</label>
                <input type="text" id="pfNaicsCode" name="pfNaicsCode" value={data.pfNaicsCode} onChange={handleChange} required/>
                </div>
                <div className='form-group'>
                <label htmlFor="pfRegion">PF Region:</label>
                <input type="text" id="pfRegion" name="pfRegion" value={data.pfRegion} onChange={handleChange} required/>
                </div>
                <div className='form-group'>
                <label htmlFor="pfSector">PF Sector:</label>
                <input type="text" id="pfSector" name="pfSector" value={data.pfSector} onChange={handleChange} required/>
                </div>
            </div>

            {/* Tenth Row */}
            <div className="form-row">
                <div>
                <label htmlFor="pfSubAssetClass">PF Sub-Asset Class:</label>
                <input type="text" id="pfSubAssetClass" name="pfSubAssetClass" value={data.pfSubAssetClass} onChange={handleChange} required/>
                </div>
                <div>
                <label htmlFor="bloombergIndustryGroup">Bloomberg Industry Group:</label>
                <input type="text" id="bloombergIndustryGroup" name="bloombergIndustryGroup" value={data.bloombergIndustryGroup} onChange={handleChange} required/>
                </div>
                <div>
                <label htmlFor="bloombergIndustrySubGroup">Bloomberg Industry Sub Group:</label>
                <input type="text" id="bloombergIndustrySubGroup" name="bloombergIndustrySubGroup" value={data.bloombergIndustrySubGroup} onChange={handleChange} required/>
                </div>
                <div>
                <label htmlFor="bloombergIndustrySector">Bloomberg Industery Sector:</label>
                <input type="text" id="bloombergIndustrySector" name="bloombergIndustrySector" value={data.bloombergIndustrySector} onChange={handleChange} required/>
                </div>
                <div>
                <label htmlFor="countryOfIssuance">Country of Issuance:</label>
                <input type="text" id="countryOfIssuance" name="countryOfIssuance" value={data.countryOfIssuance} onChange={handleChange} />
                </div>
            </div>

            {/* Row 8 */}
            <div className="form-row">
                <div>
                <label htmlFor="issueCurrency">Issue Currency:</label>
                <input type="text" id="issueCurrency" name="issueCurrency" value={data.issueCurrency} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="issuer">Issuer:</label>
                <input type="text" id="issuer" name="issuer" value={data.issuer} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="riskCurrency">Risk Currency:</label>
                <input type="text" id="riskCurrency" name="riskCurrency" value={data.riskCurrency} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="putDate">Put Date:</label>
                <input type="date" id="putDate" name="putDate" value={data.putDate} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="putPrice">Put Price:</label>
                <input type="text" step="0.01" id="putPrice" name="putPrice" value={data.putPrice} onChange={handleChange} />
                </div>
            </div>

            {/* Row 9 */}
            <div className="form-row">
                <div>
                <label htmlFor="askPrice">Ask Price:</label>
                <input type="number" id="askPrice" name="askPrice" value={data.askPrice} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="highPrice">High Price:</label>
                <input type="number" id="highPrice" name="highPrice" value={data.highPrice} onChange={handleChange} required />
                </div>
                <div>
                <label htmlFor="lowPrice">Low Price:</label>
                <input type="number" id="lowPrice" name="lowPrice" value={data.lowPrice} onChange={handleChange} required />
                </div>
                <div>
                <label htmlFor="openPrice">Open Price:</label>
                <input type="number" id="openPrice" name="openPrice" value={data.openPrice} onChange={handleChange} required />
                </div>
                <div>
                <label htmlFor="volume">Volume:</label>
                <input type="number" id="volume" name="volume" value={data.volume} onChange={handleChange} required />
                </div>
            </div>

            {/* Row 10 */}
            <div className="form-row">
                <div>
                <label htmlFor="bidPrice">Bid Price:</label>
                <input type="number" step="0.01" id="bidPrice" name="bidPrice" value={data.bidPrice} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="lastPrice">Last Price:</label>
                <input type="number" id="lastPrice" name="lastPrice" value={data.lastPrice} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="callDate">Call Date:</label>
                <input type="text" id="callDate" name="callDate" value={data.callDate} onChange={handleChange} required />
                </div>
                <div>
                <label htmlFor="callPrice">Call Price:</label>
                <input type="number" id="callPrice" name="callPrice" value={data.callPrice} onChange={handleChange} required />
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
}

export default UpdateBond
