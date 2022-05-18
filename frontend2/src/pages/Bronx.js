import React from "react";
import "../index.css";
import { useState, useEffect } from 'react';

function Bronx () {
const [data, setData] = useState([]);
const [filteredData, setFilteredData] = useState([]);
  const getBronxData = async () => {
      try {
        const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json/';
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      }
      catch(err) {
        console.log(err)
    }
  };
  useEffect(() => {getBronxData();}, []);
  
  function getFilteredData () {
  let filteredData = data.filter(function(item) {
    return item.bronx == 'Y';
  }).map(function({organizationname}){
    return {organizationname};
  });
  }
  

useEffect(() => {getFilteredData();}, []);


  return (
    <div id="borough-list">
      {data.filter(function(item) {
    return item.bronx == 'Y';
  }).map((item, index) => (
         <div className="borough-item" key={item}>
           <div className="name">{`Name: ${item.organizationname}`}</div>
           <div className="borough">{`Borough: ${item.bronx}`}</div>
           <div className="description">{`Description: ${item.description}`}</div>
           <div className="phone">{`Phone: ${item.phone}`}</div>
        
         </div>
      ))}
    </div>
  );
          }
        
         


export default Bronx;
