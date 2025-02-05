import axios from 'axios'
import React, { useEffect, useState } from 'react'


const GetAllEquities = () => {
    const [equities, setEquities] = useState([])

    useEffect(() => {
        axios.get(`https://localhost:7126/api/Equities/`)
            .then(res => {
                console.log(res.data)
                setEquities(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    var info = equities.map(equity => <p key={equity.securityId}>
                        {equity.securityId} - {equity.securityName} - {equity.cusip}
                        </p>)
  return (
    <div>
        <h2>All Equities</h2>
      {info}
    </div>
  )
}

export default GetAllEquities
