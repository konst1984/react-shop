import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import { ShopContext } from '../context/context';

const Cart = () => {
  const { handleBasketShow, order } = useContext(ShopContext);
  const quantity = order.length;
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
