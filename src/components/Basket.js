import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const discountPrice = itemsPrice < 250 ? 0 : itemsPrice * 0.05;
  const shippingPrice = itemsPrice > 500 ?  0 : 2.99;
  const totalPrice = itemsPrice + discountPrice + shippingPrice;
  return (
    <aside className="right-column right">
      <h3>Cart Summary</h3>
      <div>
        {cartItems.length === 0 && <div>Your cart is empty</div>}
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

            <div className="right text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Subtotal</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Discount</div>
              <div className="col-1 text-right">${discountPrice.toFixed(2)}</div>
            </div>            
            <div className="row">
              <div className="col-2">Shipping</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            

            <div className="row">
              <div className="col-2">
                <strong>Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')} className="checkout">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}