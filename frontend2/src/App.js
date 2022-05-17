import React from 'react'
import Home from './pages/Home'
import BoroughList from './pages/BoroughList'
import CategoryList from './pages/CategoryList'
import Show from './pages/Show'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import './index.css';

const App = () => {
    const URL = "https://data.cityofnewyork.us/resource/pqg4-dm6b.json/";
  return (
     <div className="App">
     <Header/>
     <Routes>
         <Route exact path="/" element={<Home URL={URL}/>}/>
         <Route path="/borough" element={<BoroughList URL={URL}/>}/>
         <Route path="/category"  element= {<CategoryList URL={URL}/>}/>
         <Route path="/:id"  element= {<Show URL={URL}/>}/>
     </Routes>
   
     <Footer/>
   </div>
  )
}

export default App