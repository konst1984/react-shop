import React, { useContext } from 'react';

import BasketItem from '../BasketItem/BasketItem';
import { ShopContext } from '../context/context';

const BasketList = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  const totalPrice = order && order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active light-blue darken-4">Cart</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
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

export default BasketList;
