import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="img-container">
      <img className="small" src={product.img} alt={product.title} />      
      <div className="product-info">
        <p>{product.title}</p>
        $XCD{product.price.toFixed(2)}
        <div>
          <button onClick={() => onAdd(product)} className="buy" >
              Add To Cart
          </button>
        </div> 
      </div> 
    </div>
  );
}