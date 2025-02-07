import React, { useState } from 'react'
import axios from 'axios'

const DeleteBond = () => {
    const [id, setId] = useState(0)

    const [msg, setMsg] = useState('')

    const deleteBtnHandler = (event) => {
        const confirm = window.confirm("Do you really want to delete?")

        if(confirm === true) {
            axios.delete(`https://localhost:7126/api/Bonds/Delete/${id}`)
            .then(res => {
                console.log(res)

                setMsg(`Bond ID: ${id} Deleted Successfully!`)
            })
            .catch(err => {
                console.log(err)

                setMsg("Bond could not be deleted!" + " " + err.message)
            })
        }
        event.preventDefault();
    }

  return (
    <div>
        <h2>Delete Bond</h2>
        <form onSubmit={deleteBtnHandler}>
            <label>Enter SecurityID: </label>
            <input className='deleteSID-input-box' type='text' value={id} onChange={(event) => setId(event.target.value)} placeholder='Enter SecurityID'></input>
            <button className='deleteBtn' type='submit'>Delete Bond</button>

            <h2>{msg}</h2>
        </form>
    </div>
  )
}

export default DeleteBond
