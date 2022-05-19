import React from "react";
import "../index.css";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';



function Employment () {
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
    return item.employment_job_training === 'Y';
  }).map((item, index) => (
    <div className="container">
    <div className="object" key={item}>
    <a className="dataItem" href={item.url} target="_blank" rel="noopener noreferrer">
    <p>{item.organizationname}</p></a>
     <div className="phone">{`${item.phone}`}</div>
     <div className="address1">{`${item.address1}`}</div>
     <div className="address2">{`${item.address2}`}</div>
     <div className="city">{`${item.city}`}</div>
     <div className="postcode">{`${item.postcode}`}</div>
     <Link to={`/employment/${ item.id}`} key={ item.id }>Edit</Link>
     </div>
     
     
     <div className="description" key={item}>{`${item.description}`}</div>
    
   </div>
      ))}
    </div>
  );
          }

export default Employment