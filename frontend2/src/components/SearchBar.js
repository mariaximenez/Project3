import React, { useState } from 'react'
import '../index.css';


function SearchBar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.organizationname.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
};
  return (
    <div className= "search">
        <div className= "searchInputs">
            <input type="text" placeholder={placeholder} onChange={handleFilter}/>
        <div className="searchIcon"></div>
        </div>
        {filteredData.length != 0 && (
        <div className= "dataResult">
        {filteredData.map((value, key) => {
          return (
            
            <a className="dataItem" href={value.url} target="_blank">
            <p>{value.organizationname}</p>
            </a>
          );
        })}
            </div>
,
             </div>
  );
      }
           
         
        
  

export default SearchBar