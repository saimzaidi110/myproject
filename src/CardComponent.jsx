import React from 'react';

export default function CardComponent({ id,title, price, src, category,descripon }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '200px', margin: '10px' }}>
      <img src={src} alt='' style={{ width: '100%' }}/>
      {/* <h4>User {id}</h4> */}
      <h3>{title || "Mobile Name"}</h3>
      <h4>Price:${price || "Price"}</h4>
      <h4>{category || "Brand Value"}</h4>
      <h4>{descripon || "Mobile Description"}</h4>
      <button>Buy Now</button>
    </div>
  );
}
