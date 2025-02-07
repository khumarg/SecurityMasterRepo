import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SecuritySummaryTab = () => {
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

    if(!equities || equities.length === 0) {
        return <h1>Loading....</h1>
    }

    const secSum = Object.keys(equities[0]).slice(0,6);

    console.log(secSum)

  return (
    <div>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
                {secSum.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {equities.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {secSum.map((header, colIndex) => (
                        <td key={colIndex}>{row[header]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default SecuritySummaryTab
