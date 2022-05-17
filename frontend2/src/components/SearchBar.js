import React, { useState } from "react";
import "../index.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.organizationname
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
          
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem" href={value.url} target="_blank">
                <p>{value.organizationname}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
