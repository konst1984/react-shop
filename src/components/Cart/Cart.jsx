import React from 'react';

import PropTypes from 'prop-types';

const Cart = ({ quantity = 0, handleBasketShow }) => {
  return (
    <div className="cart light-blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

Cart.propTypes = {
  handleBasketShow: PropTypes.func,
  quantity: PropTypes.number,
};

Cart.defaultProps = {
  handleBasketShow: () => {},
  quantity: 0,
};

export default Cart;
