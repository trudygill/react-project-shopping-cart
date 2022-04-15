import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const discountPrice = itemsPrice < 250 ? 0 : itemsPrice * 0.05;
  const shippingPrice = itemsPrice > 500 ?  0 : 2.99;
  const totalPrice = itemsPrice + discountPrice + shippingPrice;
  return (
    <aside className="right-column">      
        <h3 className="heading">Cart Summary</h3>      
      <div className='cart-container'>
        {cartItems.length === 0 && <p className="empty-cart">Your cart is empty, please add some items. </p>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="left">{item.title}</div>
            <div className="middle">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div>Subtotal</div>
              <div className="right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div>Discount</div>
              <div className="right">${discountPrice.toFixed(2)}</div>
            </div>            
            <div className="row">
              <div>Shipping</div>
              <div className="right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            

            <div className="row">
              <div>
                <p className="total">Total</p>
              </div>
              <div className="right">
                <p className="total">${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Checkout Successful! Thank You for Shopping with Us :)')} className="checkout">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}