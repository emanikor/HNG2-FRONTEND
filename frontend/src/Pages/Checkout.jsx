import React from 'react';

const Checkout = () => {
  return (
    <div className='order'>
        <div className='container'>
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
            id="quanti
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
      
    </div>
  );
};

export default Checkout;
