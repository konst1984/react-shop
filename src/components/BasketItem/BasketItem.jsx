import { useContext, useEffect } from 'react';

import PropTypes from 'prop-types';

import { ShopContext } from '../context/context';

const BasketItem = ({ id, name, price, quantity }) => {
  const { removeFromBasket, decQuantity, incQuantity } = useContext(ShopContext);
  useEffect(() => {
    if (quantity === 0) {
      removeFromBasket(id);
    }
  }, [quantity]);
  return (
    <li className="collection-item">
      {name}{' '}
      <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>
        remove
      </i>
      x {quantity}{' '}
      <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>
        add
      </i>
      ={price * quantity} RUB
      <span className="secondary-content">
        <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>
          delete_forever
        </i>
      </span>
    </li>
  );
};

BasketItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  removeFromBasket: PropTypes.func,
  decQuantity: PropTypes.func,
  incQuantity: PropTypes.func,
};

BasketItem.defaultProps = {
  removeFromBasket: () => {},
  decQuantity: () => {},
  incQuantity: () => {},
};

export default BasketItem;
