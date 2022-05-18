import React from "react";
import "../index.css";
import { useState, useEffect } from 'react';
import Grid from '../Grid';



function Discrimination () {
  const [data, setData] = useState([]);
    const getServiceData = async () => {
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
    useEffect(() => {getServiceData();}, []);
  return (
    <div id="list">
      {data.filter(function(item) {
    return item.anti_discrimination_human_rights === 'Y';
  }).map((item, index) => (
         <div className="item1" key={item}>
           <Grid/>
           <div className="name">{`Name: ${item.organizationname}`}</div>
           <div className="phone">{`Phone: ${item.phone}`}</div>
           <div className="address1">{`Address: ${item.address1}`}</div>
           <div className="address2">{`Address: ${item.address2}`}</div>
           <div className="city">{`City: ${item.city}`}</div>
           <div className="postcode">{`Postcode: ${item.postcode}`}</div>

           <div className="item2" key={item}>
           <div className="description">{`Description: ${item.description}`}</div>
           </div>
        
         </div>
      ))}
    </div>
  );
          }

export default Discrimination