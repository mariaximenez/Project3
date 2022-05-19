import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import '../index.css';
import SearchBar from '../components/SearchBar'


function FacilityList () {
const [data, setData] = useState([])
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
  <div className= "app">
    <SearchBar placeholder= "Facility Drop Down" data={data}/>
  </div>
);
    }


export default FacilityList