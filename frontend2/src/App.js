import React from 'react'
import Home from './pages/Home'
import FacilityList from './pages/FacilityList'
import Show from './components/Show'
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
     <div className="App">
     <Header/>
     <Routes>
         <Route exact path="/" element={<Home URL={URL}/>}/>
         <Route path="/facility"  element= {<FacilityList URL={URL}/>}/>
         <Route path="/bronx"  element= {<Bronx URL={URL}/>}/>
         <Route path="/bronx/:id"  element= {<Show URL={URL}/>}/>
         <Route path="/brooklyn"  element= {<Brooklyn URL={URL}/>}/>
         <Route path="/brooklyn/{theSelectedFacilityID}"  element= {<Show URL={URL}/>}/>
         <Route path="/manhattan"  element= {<Manhattan URL={URL}/>}/>
         <Route path="manhattan/{theSelectedFacilityID}"  element= {<Show URL={URL}/>}/>
         <Route path="/statenisland"  element= {<StatenIsland URL={URL}/>}/>
         <Route path="/statenisland/{theSelectedFacilityID}"  element= {<Show URL={URL}/>}/>
         <Route path="/queens"  element= {<Queens URL={URL}/>}/>
         <Route path="/queens/{theSelectedFacilityID}"  element= {<Show URL={URL}/>}/>
     </Routes>
   
     <Footer/>
   </div>
  )
}

export default App