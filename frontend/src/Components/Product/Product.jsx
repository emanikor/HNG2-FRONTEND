import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import './product.css';

const arrlist = [
  {
    id: 1,
    title: 'Summer Dresses',
    description:
      'Complete your summer look with our chic accessories. From trendy sunglasses to stylish hats, we have got you covered.',
    image: image1,
    price: '417,000',
  },
  {
    id: 2,
    title: 'Chic Accessories',
    description:
      'Enhance your style with our chic accessories. From sunglasses to hats, we have the latest trends.',
    image: image2,
    price: '417,000',
  },
  {
    id: 3,
    title: 'Exclusive Swimsuit',
    description:
      'Discover our exclusive swimsuit collection for the perfect summer getaway.',
    image: image3,
    price: '417,000',
  },
];

const Seller = () => {
  return (
    <div className="card-container1">
      <h2>PRODUCTS</h2>
      <p>Explore the irresistible allure of our latest New Arrivals at Timbu Cloud Shop.</p>
      <div className="card-grid5">
        {arrlist.map((item) => (
          <div key={item.id} className="card8">
            <div className="card-image">
              <img src={item.image} alt={item.title} className='image' />
              <div className='buttonshop'>
              <Link to={`/productcheckout/${item.id}`}>
              <button className="buyfy-btn">Buy Now</button>
              </Link>
              <button className="shopify-btn">Shop Now</button>
              </div>
            </div>
            <div className="card-info">
              <span>Price: ${item.price}</span>
              <p className="desc">{item.description}</p>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seller;
