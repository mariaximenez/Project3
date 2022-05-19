import React from "react";
import "../index.css";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
function Bronx (props) {
  const [data, setData] = useState([]);
  const getBoroughData = async () => {
      try {
        const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json/';
        const response = await fetch(url);
        const data = await response.json();
        const onlyBronx = data.filter((eachItem) => {
          return eachItem.bronx === "Y"
        })
        setData(onlyBronx);
      }
      catch(err) {
        console.log(err)
      }
  };
  
  useEffect(() => {getBoroughData();}, []);
  return (
    <div id="list">
      {
        data.map((eachItem, idx) => {
          return (
            <div className="container" key={idx}>
              <div className="object">
                <a className="dataItem" href={eachItem.url} target="_blank" rel="noopener noreferrer">
                  <p>{eachItem.organizationname}</p>
                </a>
                <div className="phone">{`${eachItem.phone}`}</div>
                <div className="address1">{`${eachItem.address1}`}</div>
                <div className="address2">{`${eachItem.address2}`}</div>
                <div className="city">{`${eachItem.city}`}</div>
                <div className="postcode">{`${eachItem.postcode}`}</div>
                <div className="description">{`${eachItem.description}`}</div>
                <Link to={`/bronx/${eachItem.organizationname}`}>Show Page</Link>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
export default Bronx