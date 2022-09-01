import React, { useContext } from 'react';

import { ShopContext } from '../context/context';
import { GoodsItem } from '../GoodsItem';

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);
  if (!goods.length) {
    return <h3>Goods not found</h3>;
  }
  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodsItem key={good.mainId} {...good} />
      ))}
    </div>
  );
};

export default GoodsList;
