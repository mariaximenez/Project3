import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';



export default function Home () {
const [data, setData] = useState([{data}])
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
    <div>
      {data.map((data) => {
    <Link to={`/:id/${ data.id}`} key={ data.id }></Link>
        return (
          <div>
                <h1>Sanity Check</h1>
                <h1>{data.organizationname}</h1>
                <h2>{data.borough}</h2>
                <h3>{data.description}</h3>
                <p>{data}</p>
            </div>
        )
      })}
    </div>
  );
    }
