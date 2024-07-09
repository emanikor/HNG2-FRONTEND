import React from 'react';
import { Link } from 'react-router-dom';
import "./explore.css";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
// import image4 from "../assets/image4.jpg"

const arrlist = [
  {
    id: 1,
    title: "NEW SELLER",
    description: 'Complete your summer look with our chic accessories. From trendy sunglasses to stylish hats, we have got you covered.',
    image: image1,
  },
  {
    id: 2,
    title: "BEST SELLER",
    description: 'Complete your summer look with our chic accessories. From trendy sunglasses to stylish hats, we have got you covered.',
    image: image2,
  },
  {
    id: 3,
    title: "EXPLORE MORE",
    description: 'Complete your summer look with our chic accessories. From trendy sunglasses to stylish hats, we have got you covered.',
    image: image3,
  },
 
];

function Explore() {
    return (
      <div className='Jobs-container'>
        <h2>FEATURE PRODUCTS CATEGORY</h2>
        <p>"Explore the irresistible allure of our latest New Arrivals at Timbu Cloud Shop. From essential classics to bold fashion statements, each piece is carefully curated to elevate your style."</p>
        <div className='card-grid'>
          {arrlist.map((item) => (
            <Link to={'/product'} key={item.id}>
              <div className='card'>
                <div className='overlay'>
                  <p className='headTitle'>{item.description}</p>
                  <div className='buttons'>
                    <button className='fultime'>Buy now</button>
                    <button className='urgent'>Shop now</button>
                  </div>
                </div>
                <img src={item.image} alt={item.description} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  export default Explore;
