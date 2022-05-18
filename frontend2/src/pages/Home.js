import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../index.css';
import SearchBar from '../components/SearchBar'
import Body from '../components/Body'


export default function Home () {
const [data, setData] = useState([])
const getData = async () => {
    try {
    const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json';
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
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
    <Body/>
  </div>
);
    }
