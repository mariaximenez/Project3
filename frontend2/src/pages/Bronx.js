import React, { useState } from "react";
import "../index.css";


function Bronx () {
const [data, setData] = useState([]);
  const getBronxData = async () => {
      try {
        const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json/';
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    // if (data === "bronx") {
    //   setData([]);
    // } else {
    //   setData === null;
    // } }
      catch(err) {
        console.log(err)
    }
  }
  
  useEffect(() => {getBronxData();}, []);
  return (
    <div className= "dataResult">
        {data.map((value, key) => {
          return (
            <a className="dataItem" href={value.url} target="_blank">
            <p>{value.organizationname}</p>
            </a>
          )}
  </div>
  );
  } 
  
  
}




export default Bronx;
