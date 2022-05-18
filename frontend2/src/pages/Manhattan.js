import React from "react";
import "../index.css";
import { useState, useEffect } from 'react';



function Manhattan () {
  const [data, setData] = useState([]);
    const getBoroughData = async () => {
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
    useEffect(() => {getBoroughData();}, []);
  return (
    <div id="list">
      {data.filter(function(item) {
    return item.manhattan === 'Y';
  }).map((item, index) => (
    <div className="container">
    <div className="object" key={item}>
     <div className="name">{`${item.organizationname}`}</div>
     <div className="phone">{`${item.phone}`}</div>
     <div className="address1">{`${item.address1}`}</div>
     <div className="address2">{`${item.address2}`}</div>
     <div className="city">{`${item.city}`}</div>
     <div className="postcode">{`${item.postcode}`}</div>
     </div>
     
     
     <div className="description" key={item}>{`${item.description}`}</div>
    
   </div>
      ))}
    </div>
  );
          }

export default Manhattan;
