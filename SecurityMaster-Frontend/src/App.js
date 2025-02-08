import { Route, Routes } from 'react-router-dom';
import './App.css';
import DeleteEquity from './components/equities/DeleteEquity';
import GetAllEquities from './components/equities/GetAllEquities';
import GetEquityByID from './components/equities/GetEquityByID';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddEquity from './components/equities/AddEquity';
import UpdateEquity from './components/equities/UpdateEquity';
import EquityHome from './components/equities/EquityHome';
import NotFound from './components/NotFound';
import BondsHome from './components/bonds/BondsHome';
import GetEquityByName from './components/equities/GetEquityByName';
import GetAllBonds from './components/bonds/GetAllBonds';
import GetBondsByID from './components/bonds/GetBondByID';
import GetBondByName from './components/bonds/GetBondByName';
import DeleteBond from './components/bonds/DeleteBond';
import AddBond from './components/bonds/AddBond';
import UpdateBond from './components/bonds/UpdateBond';
import EquityTabs from './components/equities/EquityTabs';
import BondsTabs from './components/bonds/BondsTabs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Equities' element={<EquityHome/>}>
          {/* <Route index element={<GetAllEquities/>}/> */}
          {/* <Route index path='AllEquities' element={<GetAllEquities/>}/> */}
          <Route index element={<EquityTabs/>}/>
          <Route index path='AllEquities' element={<EquityTabs/>}/>
          <Route path='ID' element={<GetEquityByID/>}></Route>
          <Route path='Name' element={<GetEquityByName/>}></Route>
          <Route path='Add' element={<AddEquity/>}></Route>
          <Route path='Update' element={<UpdateEquity/>}></Route>
          <Route path='Delete' element={<DeleteEquity/>}></Route>
        </Route>
        

        <Route path='/Bonds' element={<BondsHome/>}>
          {/* <Route index element={<GetAllBonds/>}/>
          <Route path='AllBonds' element={<GetAllBonds/>}/> */}
          <Route index element={<BondsTabs/>}/>
          <Route index path='AllBonds' element={<BondsTabs/>}/>
          <Route path='ID' element={<GetBondsByID/>}/>
          <Route path='Name' element={<GetBondByName/>}/>
          <Route path='Add' element={<AddBond/>}/>
          <Route path='Update' element={<UpdateBond/>}/>
          <Route path='Delete' element={<DeleteBond/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/* <GetAllEquities/> */}
      {/* <GetEquityByID/> */}
      {/* <DeleteEquity/> */}
    </div>
  );
}

export default App;
