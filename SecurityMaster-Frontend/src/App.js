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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Equities' element={<EquityHome/>}>
          <Route index element={<GetAllEquities/>}/>
          <Route index path='AllEquities' element={<GetAllEquities/>}/>
          <Route path='ID' element={<GetEquityByID/>}></Route>
          <Route path='Name' element={<GetEquityByName/>}></Route>
          <Route path='Add' element={<AddEquity/>}></Route>
          <Route path='Update' element={<UpdateEquity/>}></Route>
          <Route path='Delete' element={<DeleteEquity/>}></Route>
        </Route>
        

        <Route path='/Bonds' element={<BondsHome/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/* <GetAllEquities/> */}
      {/* <GetEquityByID/> */}
      {/* <DeleteEquity/> */}
    </div>
  );
}

export default App;
