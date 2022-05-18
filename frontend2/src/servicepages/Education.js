import React from "react";
import "../index.css";
import { useState, useEffect } from 'react';



function Education () {
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
    return item.education === 'Y';
  }).map((item, index) => (
         <div className="item" key={item}>
           <div className="name">{`Name: ${item.organizationname}`}</div>
           <div className="borough">{`Service: ${item.education}`}</div>
           <div className="description">{`Description: ${item.description}`}</div>
           <div className="phone">{`Phone: ${item.phone}`}</div>
        
         </div>
      ))}
    </div>
  );
          }

export default Education