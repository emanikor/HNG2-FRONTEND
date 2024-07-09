import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <p>Review your items and proceed to payment.</p>
      {/* Static content as example */}
      <div>
        <h3>Product 1</h3>
        <span>Price: $10.99</span>
      </div>
      <div>
        <h3>Product 2</h3>
        <span>Price: $12.99</span>
      </div>
      <button>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
