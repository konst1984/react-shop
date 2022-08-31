import React from 'react';

import PropTypes from 'prop-types';

import GoodsItem from '../GoodsItem/GoodsItem';

const GoodsList = (props) => {
  const { goods, addToBasket } = props;
  if (!goods.length) {
    return <h3>Goods not found</h3>;
  }
  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodsItem key={good.mainId} {...good} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.array,
  addToBasket: PropTypes.func,
};

GoodsList.defaultProps = {
  goods: [],
  addToBasket: () => {},
};
export default GoodsList;
