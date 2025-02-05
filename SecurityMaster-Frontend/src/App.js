import { Route, Routes } from 'react-router-dom';
import './App.css';
import DeleteEquity from './components/equities/DeleteEquity';
import GetAllEquities from './components/equities/GetAllEquities';
import GetEquityByID from './components/equities/GetEquityByID';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddEquity from './components/equities/AddEquity';
import UpdateEquity from './components/equities/UpdateEquity';

function App() {
  return (
    <div className="App">
      <h2>Security Master</h2>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AllEquities' element={<GetAllEquities/>}/>
        <Route path='/Equities/ID' element={<GetEquityByID/>}></Route>
        <Route path='/Equities/Add' element={<AddEquity/>}></Route>
        <Route path='/Equities/Update' element={<UpdateEquity/>}></Route>
        <Route path='/Equities/Delete' element={<DeleteEquity/>}></Route>
        <Route path='/Bonds'/>
      </Routes>
      {/* <GetAllEquities/> */}
      {/* <GetEquityByID/> */}
      {/* <DeleteEquity/> */}
    </div>
  );
}

export default App;
