import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetEquityByID = () => {
    const [equity, setEquity] = useState({})
    const [id, setId] = useState(0)

    const clickHandler = (event) => {
        axios.get(`https://localhost:7126/api/Equities/${id}`)
            .then(res => {
                console.log(res.data)
                setEquity(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
        event.preventDefault();
    }

  return (
    <div>
        <h2>Get Equity By ID</h2>
        <form onSubmit={clickHandler}>
            <label>Enter SecurityID: </label>
            <input type='text' value={id} onChange={(event) => setId(event.target.value)} placeholder='Enter SecurityID'></input>
            <button type='submit'>Search</button>
        </form>
        <h2>{equity.securityId} - {equity.securityName} - {equity.cusip}</h2>
    </div>
  )
}

export default GetEquityByID
