import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import './product.css';

const products = [
  { id: 1, title: 'Summer dresses', description: 'Complete your summer look with our chic accessories. From trendy sunglasses to stylish hats, we have got you covered.', image: image1 },
  { id: 2, title: 'Chic Accessories', description: 'Complete your summer look with our chic accessories. From trendy sunglasses to stylish hats, we have got you covered.', image: image2 },
  { id: 3, title: 'Exclusive Swimsuit', description: 'Complete your summer look with our chic accessories. From trendy sunglasses to stylish hats, we have got you covered.', image: image3 },
];

const ProductDescription = () => {
  const { id } = useParams();
  const location = useLocation();
  const productId = parseInt(id, 10);
  const [quantity, setQuantity] = useState(1);

  let product;

  if (location.state) {
    product = location.state;
  } else {
    product = products.find(item => item.id === productId);
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const { title, description, image } = product;

  return (
    <div className="product-description-container">
        <h2>Checkout Section</h2>
        <span>You're just a few steps away from completing your order. Review your items, enter your details,<br></br>
             and confirm your purchase. We strive to make your shopping experience as seamless as possible.</span>
      <div className="product-details">
        <div className="product-item">
          <h3>Product Image: <img src={image} alt={title} className="product-image" /> </h3>
          
        </div>
        <div className="product-item">
          <h3>Product Name:{title}</h3>
          
        </div>
        <div className="product-item">
          <h3>Product Description:        {description}</h3>
          
        </div>
        <div className="product-item">
          <h3>Quantity: <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
            min="1"
          /></h3>
          
        </div>
        <div className='previewButton'>
        <button
          onClick={() => window.location.href = '/checkout'}
          className="checkout-button"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={() => window.location.href = '/checkout'}
          className="checkout-button"
        >
          Proceed to review
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
