import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

const CategoryList = (props) => {
  const [category, setCategory] = useState([]);

  const getCategoryData = async () => {
    try {
      const url = 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json/';
      const response = await fetch(props.URL + "homelessness");
      const data = await response.json();
      setCategory(data);
    }
    catch(err) {
      console.log(err)
  }
}

useEffect(() => {getCategoryData();}, []);
return (
  <div>
    {category.map((category) => {
  <Link to={`/:id/${ category.id}`} key={ category.id }></Link>
      return (
    <div>
      <h2>{category.organizationname}</h2>
      <h3>{category.borough}</h3>
      <p>{category.address}</p>
    </div>
)
})}
</div>
);
}



export default CategoryList