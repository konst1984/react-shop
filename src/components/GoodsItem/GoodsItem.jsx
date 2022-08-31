import React from 'react';

import PropTypes from 'prop-types';

const GoodsItem = (props) => {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: { finalPrice: price },
    displayAssets,
    addToBasket,
  } = props;
  const { full_background } = displayAssets[0];
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

GoodsItem.propTypes = {
  addToBasket: PropTypes.func,
};

GoodsItem.defaultProps = {
  addToBasket: () => {},
};

export default GoodsItem;
