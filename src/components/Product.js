import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="img-container">
      <img className="small" src={product.img} alt={product.title} />          
      <div className="product-info">
        {product.title}
        ${product.price.toFixed(2)}  
      </div> 
      <div>
        <button onClick={() => onAdd(product)} className="buy" >
          Add To Cart
        </button>
      </div> 
    </div>
  );
}