import React from "react";
import "../index.css";
import { useState, useEffect } from 'react';

function Manhattan (props) {
  const [data, setData] = useState([]);
  const getBoroughData = async () => {
      try {
        const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json/';
        const response = await fetch(url);
        const data = await response.json();
        const onlyManhattan = data.filter((eachItem) => {
          return eachItem.manhattan === "Y"
        })
        setData(onlyManhattan);
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
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Manhattan;
