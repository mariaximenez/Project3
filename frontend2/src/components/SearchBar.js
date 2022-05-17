import React from 'react'
import '../index.css';

function SearchBar({placeholder, data}) {
  return (
    <div className= "search">
        <div className= "searchInputs">
            <input type="text" placeholder={placeholder}/>
        <div className="searchIcon"></div>
        </div>
        <div className= "dataResult">
        {data.map((value, key) => {
          return (
            
            <a className="dataItem" href={value.url} target="_blank">
            <p>{value.organizationname}</p>
            </a>
          );
        })}
            </div>
             </div>
  );
      }
           
         
        
  

export default SearchBar