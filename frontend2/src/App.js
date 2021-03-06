import React from 'react'
import Home from './pages/Home'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import './index.css';
import Bronx from './pages/Bronx'
import Brooklyn from './pages/Brooklyn'
import Manhattan from './pages/Manhattan'
import StatenIsland from './pages/StatenIsland'
import Queens from './pages/Queens'


const App = () => {
    const URL = "https://data.cityofnewyork.us/resource/pqg4-dm6b.json/";
  return (
    <div>
     <div className="App">
     <Header/>
     <Routes>
         <Route exact path="/" element={<Home URL={URL}/>}/>
         <Route path="/bronx"  element= {<Bronx URL={URL}/>}/>
         <Route path="/brooklyn"  element= {<Brooklyn URL={URL}/>}/>
         <Route path="/manhattan"  element= {<Manhattan URL={URL}/>}/>
         <Route path="/statenisland"  element= {<StatenIsland URL={URL}/>}/>
         <Route path="/queens"  element= {<Queens URL={URL}/>}/>
   </Routes>
   </div>
   <Footer/>
    </div>
  )
}

export default App