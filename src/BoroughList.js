import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const BoroughList = (props) => {
  const [borough, setBorough] = useState([]);

  const getBoroughData = async () => {
    try {
      const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json/';
      const response = await fetch(url);
      const data = await response.json();
      setBorough(data);
    }
    catch(err) {
      console.log(err)
  }
}

useEffect(() => {getBoroughData();}, []);
return (
  <div>
    {borough.map((borough) => {
  <Link to={`/:id/${ borough.id}`} key={ borough.id }></Link>
      return (
    <div>
      <h2>{borough.organizationname}</h2>
      <h3>{borough.borough}</h3>
      <p>{borough.address}</p>
    </div>
)
})}
</div>
);
} 





export default BoroughList