import { localTradeData } from '../data/main.js';

const TRADE_DATA_KEY = 'lscache-trade2data';

export const getTradeData = () => {
  if (localStorage.getItem(TRADE_DATA_KEY)) {
    return JSON.parse(localStorage.getItem(TRADE_DATA_KEY));
  }

  return localTradeData;
}
