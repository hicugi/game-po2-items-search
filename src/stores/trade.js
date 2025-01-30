import { localTradeData } from '../data/main.js';
import { localTradeItems } from '../data/items.js';

export const getData = (key, data) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }

  return data;
}

export const getTradeData = () => getData('lscache-trade2data', localTradeData);
export const getTradeItems = () => getData('lscache-trade2items', localTradeItems);

