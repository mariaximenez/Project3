import React from 'react'
import { useState, useEffect } from 'react';

const CategoryList = (props) => {
  const [category, setCategory] = useState(null);

  const getCategoryData = async () => {
    try {
      const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json/';
      const response = await fetch(URL + "homelessness");
      const data = await response.json();
      setCategory(data);
    }
    catch(err) {
      console.log(err)
  }
}

useEffect(() => {getCategoryData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h1>{category}</h1>
      <h2>{category.organizationname}</h2>
      <h3>{category.borough}</h3>
      <p>{category.address}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return category ? loaded() : <h1>Loading...</h1>;
}




export default CategoryList