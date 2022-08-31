import React from 'react';

import PropTypes from 'prop-types';

import BasketItem from '../BasketItem/BasketItem';

const BasketList = ({ order, handleBasketShow, removeFromBasket, decQuantity, incQuantity }) => {
  const totalPrice = order && order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active light-blue darken-4">Cart</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={() => removeFromBasket(item.id)}
            decQuantity={() => decQuantity(item.id)}
            incQuantity={() => incQuantity(item.id)}
          />
        ))
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}
      <li className="collection-item active light-blue darken-4">
        Total cost: {totalPrice} RUB
        <button className="secondary-content btn-small">Checkout</button>
      </li>
      <i className="material-icons basket-close white-text" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

BasketList.propTypes = {
  order: PropTypes.array,
  handleBasketShow: PropTypes.func,
  removeFromBasket: PropTypes.func,
  decQuantity: PropTypes.func,
  incQuantity: PropTypes.func,
};

BasketList.defaultProps = {
  order: [],
  handleBasketShow: () => {},
  removeFromBasket: () => {},
  decQuantity: () => {},
  incQuantity: () => {},
};

export default BasketList;
