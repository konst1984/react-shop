import React, { useState, useEffect } from 'react';

import { API_KEY, API_URL } from '../../config';
import Alert from '../Alert/Alert';
import BasketList from '../BasketList/BasketList';
import Cart from '../Cart/Cart';
import GoodsList from '../GoodsList/GoodsList';
import Preloader from '../Preloader/Preloader';

const Shop = () => {
  const [goods, setGoogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [basketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const handleBasketShow = () => setBasketShow(!basketShow);
  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
  };
  const incQuantity = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      } else return item;
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else return item;
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoogs(data.shop);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
      {basketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          decQuantity={decQuantity}
          incQuantity={incQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;
