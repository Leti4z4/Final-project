import React from "react";
import { stocksList } from "../constants/constants";
import StockCard from "./StockCard";

function BuyStocks({setUser, tab}) {

  return (
    <div className="buy-stocks-container">
      {stocksList.map((stock) => {
        return <StockCard stock={stock} key={stock.name} setUser={setUser} tab={tab}/>;
      })}
    </div>
  );
}

export default BuyStocks;
