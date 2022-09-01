import React, { useEffect, useContext } from 'react';

import { API_KEY, API_URL } from '../../config';
import { Alert } from '../Alert';
import { BasketList } from '../BasketList';
import { Cart } from '../Cart';
import { ShopContext } from '../context/context';
import { GoodsList } from '../GoodsList';
import { Preloader } from '../Preloader';

const Shop = () => {
  const { setGoods, loading, order, basketShow, alertName } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
  }, []);
  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {basketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
