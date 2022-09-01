import { useContext } from 'react';

import { ShopContext } from '../context/context';

const GoodsItem = (props) => {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: { finalPrice: price },
    displayAssets,
  } = props;
  const { full_background } = displayAssets[0];

  const { addToBasket } = useContext(ShopContext);
  return (
    <div className="card">
      <div className="card-image">
        <img src={`${full_background}`} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name.toUpperCase()}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Buy
        </button>
        <span className="right">{price}RUB</span>
      </div>
    </div>
  );
};

GoodsItem.propTypes = {};

GoodsItem.defaultProps = {};

export default GoodsItem;
