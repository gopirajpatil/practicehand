import React from 'react'
//import { Navbar } from 'react-bootstrap';
import './App.css';
import Handover from './Components/Handover';
import NotCustomer from './Components/NotCustomer';
import Navbar  from'./Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Handover/>
     <NotCustomer/>
   
    </div>
  );
}

export default App;
