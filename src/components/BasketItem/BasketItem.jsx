import PropTypes from 'prop-types';

const BasketItem = ({ name, price, quantity, removeFromBasket, decQuantity, incQuantity }) => {
  return (
    <li className="collection-item">
      {name}{' '}
      <i className="material-icons basket-quantity" onClick={decQuantity}>
        remove
      </i>
      x {quantity}{' '}
      <i className="material-icons basket-quantity" onClick={incQuantity}>
        add
      </i>
      ={price * quantity}RUB
      <span className="secondary-content">
        <i className="material-icons basket-delete" onClick={removeFromBasket}>
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
