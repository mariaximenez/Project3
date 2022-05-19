import React from "react";
import "../index.css";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Show (props) {
    let params = useParams ()
    console.log(params)
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
          const url = props.URL;
          const response = await fetch(url);
          const data = await response.json();
         const result=data.find(item =>
          item.organizationname === params.id )
          console.log(result)
          setData (result) 
        }
        catch(err) {
          console.log(err)
      }
    };
    useEffect(() => {fetchData();}, []);

        if (data.organizationname) {
          return (
    <div className="container">
    <div className="object" key={data}>
     <div className="phone">{`${data.organizationname}`}</div>
     <div className="address1">{`${data.address1}`}</div>
     <div className="address2">{`${data.address2}`}</div>
     <div className="city">{`${data.city}`}</div>
     <div className="postcode">{`${data.postcode}`}</div>
     </div>
          )
          else {
             (
              <div>
              <h2>No resource data available</h2>
              </div>
          )};
          
   </div>
      )}

  ;
          }

   
  export default Show