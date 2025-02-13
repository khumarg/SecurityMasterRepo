import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Box, Tab } from '@mui/material'
import {TabContext, TabList, TabPanel } from '@mui/lab'
import SecuritySummary from './Tabs/SecuritySummary'
import SecurityIdentifier from './Tabs/SecurityIdentifier'
import SecurityDetails from './Tabs/SecurityDetails'
import Risk from './Tabs/Risk'
import RegDetails from './Tabs/RegDetails'
import RefData from './Tabs/RefData'
import PricingDetails from './Tabs/PricingDetails'
import DividendHistory from './Tabs/DividendHistory'

const EquityTabs = () => {
    const [value, setValue] = useState('1')
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://localhost:7126/api/Equities/`)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    if(!data || data.length === 0) {
        return <h1>Loading....</h1>
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box>
            <br/> <br/> <br/>
            
        <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor : 'divider'}}>
                <TabList variant='scrollable' aria-label='tabs example' onChange={handleChange} textColor='primary'
                indicatorColor='primary' centered
                sx={{
                    "& .MuiTab-root": {
                      color: "00b4d8",
                    //   fontWeight: "bold",
                    },
                    "& .Mui-selected": {
                      color: "black",
                      fontWeight: "bold"
                    }
                  }}
                >
                    <Tab label='Security Summary' value='1'/>
                    <Tab label='Security Identifier' value='2'/>
                    <Tab label='Security Details' value='3'/>
                    <Tab label='Risk' value='4'/>
                    <Tab label='Regulatory Details' value='5'/>
                    <Tab label='Reference Data' value='6'/>
                    <Tab label='Pricing Details' value='7'/>
                    <Tab label='Dividend History' value='8'/>
                </TabList>
            </Box>
            <TabPanel value='1'><SecuritySummary/></TabPanel>
            <TabPanel value='2'><SecurityIdentifier/></TabPanel>
            <TabPanel value='3'><SecurityDetails/></TabPanel>
            <TabPanel value='4'><Risk/></TabPanel>
            <TabPanel value='5'><RegDetails/></TabPanel>
            <TabPanel value='6'><RefData/></TabPanel>
            <TabPanel value='7'><PricingDetails/></TabPanel>
            <TabPanel value='8'><DividendHistory/></TabPanel>
        </TabContext>
        </Box>
        )
}
export default EquityTabs