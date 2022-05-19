import React from "react";
import "../index.css";
import { useParams } from 'react-router-dom'


function Show () {
    let params = useParams
  return (
  <div className="container">
  <div className="object" key={item.{theSelectedFacilityID}}>"
    <a className="dataItem" href={item.{theSelectedFacilityID}.url} target="_blank" rel="noopener noreferrer">
    <p>{item.{theSelectedFacilityID}.organizationname}</p></a>
     <div className="phone">{`${item.{theSelectedFacilityID}.phone}`}</div>
     <div className="address1">{`${item.{theSelectedFacilityID}.address1}`}</div>
     <div className="address2">{`${item.{theSelectedFacilityID}.address2}`}</div>
     <div className="city">{`${item.{theSelectedFacilityID}.city}`}</div>
     <div className="postcode">{`${item.{theSelectedFacilityID}.postcode}`}</div>
     </div>
     
    
     <div className="description" key={item}>{`${item.{theSelectedFacilityID}.description}`}</div>
     }
   </div>
      ))}
    </div>
  );
          }

  export default Show