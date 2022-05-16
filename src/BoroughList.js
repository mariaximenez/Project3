import React from 'react'
import { useState, useEffect } from 'react';

const BoroughList = (props) => {
  const [borough, setBorough] = useState(null);

  const getBoroughData = async () => {
    try {
      const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json/';
      const response = await fetch(URL + "borough");
      const data = await response.json();
      setBorough(data);
    }
    catch(err) {
      console.log(err)
  }
}

useEffect(() => {getBoroughData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h1>{borough}</h1>
      <h2>{borough.organizationname}</h2>
      <h3>{borough.borough}</h3>
      <p>{borough.address}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return borough ? loaded() : <h1>Loading...</h1>;
}




export default BoroughList