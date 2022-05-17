import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom'
import './index.css';


export default function Home () {
const [data, setData] = useState([])
  //function to fetch facility data
const getData = async () => {
    try {
    const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json';
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    console.log(data);
}
    catch(err) {
        console.log(err)
    }
  }
// useEffect to run getData when component mounts
useEffect(() => {
    getData(); }, []);
return (
  <div className='app'>
  <input placeholder="Search" onChange={event => setData(event.target.value)}/>
  {
      data.map((post, index) => {
        <div key={index}>
          <p>{data.organizationnamw}</p>
          <p>{data.borough}</p>
  </div>
      })
    }
  </div>
  );
    }
