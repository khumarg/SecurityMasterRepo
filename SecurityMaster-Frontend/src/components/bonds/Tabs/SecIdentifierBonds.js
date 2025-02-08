import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SecIndentifierBonds = () => {
    const [bonds, setbonds] = useState([])

    useEffect(() => {
        axios.get(`https://localhost:7126/api/Bonds/`)
            .then(res => {
                console.log(res.data)
                setbonds(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    if(!bonds || bonds.length === 0) {
        return <h1>Loading....</h1>
    }

    const secIdentifier = Object.keys(bonds[0]).slice(7,12);

    console.log(secIdentifier)

  return (
    <div>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
                {secIdentifier.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {bonds.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {secIdentifier.map((header, colIndex) => (
                        <td key={colIndex}>{row[header]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default SecIndentifierBonds
