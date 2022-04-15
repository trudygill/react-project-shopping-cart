import React from 'react';

export default function Header(props) {
  return (
    <header className="navbar">

      <div>
          <h1 className="logo">Zoié</h1>
      </div>

      <div>
        <a className="cart" href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>

    </header>
  );
}