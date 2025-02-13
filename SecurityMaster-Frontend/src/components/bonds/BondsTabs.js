import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Box, Tab } from '@mui/material'
import {TabContext, TabList, TabPanel } from '@mui/lab'
import SecSummaryBonds from './Tabs/SecSummaryBonds'
import SecIndentifierBonds from './Tabs/SecIdentifierBonds'
import SecDetailsBonds from './Tabs/SecDetailsBonds'
import RiskBonds from './Tabs/RiskBonds'
import RegDetailsBonds from './Tabs/RegDetailsBonds'
import RefDataBonds from './Tabs/RefDataBonds'
import PutScheduleBonds from './Tabs/PutScheduleBonds'
import PricingAnalyticsBonds from './Tabs/PricingAnalyticsBonds'
import CallScheduleBonds from './Tabs/CallScheduleBonds'

const BondsTabs = () => {
    const [value, setValue] = useState('1')
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://localhost:7126/api/Bonds/`)
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
                <TabList variant='scrollable' aria-label='tabs example' onChange={handleChange} 
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
                    <Tab label='Put Schedule' value='7'/>
                    <Tab label='Pricing & Analytics' value='8'/>
                    <Tab label='Call Schedule' value='9'/>
                </TabList>
            </Box>
            <TabPanel value='1'><SecSummaryBonds/></TabPanel>
            <TabPanel value='2'><SecIndentifierBonds/></TabPanel>
            <TabPanel value='3'><SecDetailsBonds/></TabPanel>
            <TabPanel value='4'><RiskBonds/></TabPanel>
            <TabPanel value='5'><RegDetailsBonds/></TabPanel>
            <TabPanel value='6'><RefDataBonds/></TabPanel>
            <TabPanel value='7'><PutScheduleBonds/></TabPanel>
            <TabPanel value='8'><PricingAnalyticsBonds/></TabPanel>
            <TabPanel value='9'><CallScheduleBonds/></TabPanel>
        </TabContext>
        </Box>
        )
}
export default BondsTabs