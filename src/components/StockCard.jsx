import React, { useEffect, useState } from "react";

function StockCard({ stock, setUser, tab }) {
  const [amount, setAmount] = useState(1);
  let user = JSON.parse(localStorage.getItem("user"));

  const handleSum = () => {
    setAmount((prev) => prev + 1);
  };

  const handleSub = () => {
    setAmount((prev) => prev - 1);
  };

  useEffect(() => {
    if(amount > 1){
      setAmount(1)
    }
  }, [tab])
  

  const handleBuyStock = () => {
    if (user.wallet >= stock.price * amount) {
      const foundStock = user.stocks.find(
        (userStock) => userStock.name == stock.name
      );
      if (foundStock) {
        foundStock.amount += amount;
      } else {
        user.stocks.push({ ...stock, amount });
      }
      user.wallet -= stock.price * amount;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    }
  };

  const handleSellStock = () => {
    const foundStock = user.stocks.find(
      (userStock) => userStock.name == stock.name
    );
    if (foundStock.amount == 1 || foundStock.amount == amount) {
      user.stocks =  user.stocks.filter(userStock => userStock.name != foundStock.name)
    } else{
      foundStock.amount -= amount;
    }
    user.wallet += foundStock.price * amount;
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  console.log(tab);

  return (
    <div className="stock-card">
      <h4>{stock.name}</h4>
      {
            tab == 4 &&
          <p style={{color: "#136a8a"}}> {stock.amount} {stock.amount > 1 ? "disponibles" : "disponible"}</p>
          }
      <div className="stock-logo">
        <img src={stock.img} alt={stock.name} width={"50px"} height={"auto"} />
      </div>
      {tab !== 3 && tab !== 4 ? (
        <>
        <i>{`${stock.amount} ${stock.amount == 1 ? "acción" : "acciones"}`}</i>
        <p style={{color: "#136a8a"}}>$ {stock.price * stock.amount}</p> 
        </>
      ) : (
        <>
          <div className="stock-buttons">
            <button onClick={handleSub} disabled={amount == 0}>
              -
            </button>
            <p style={tab == 3 ? { color: "#136a8a" } : null}>
              {
                tab == 3 ? 
                `$ ${stock.price * amount}` :
                tab == 4 ? 
                `${amount}` :
                null
              }
            </p>
            <button onClick={handleSum}>+</button>
          </div>
          <i style={tab == 4 ? { color: "#136a8a" } : null}>{`${tab == 3 ? `Cantidad ${amount}` : `$ ${stock.price * amount}`} `}</i>
        </>
      )}

      {tab == 3 ? (
        <button
          disabled={
            user.wallet >= stock.price * amount && amount > 0 ? false : true
          }
          onClick={handleBuyStock}
        >
          Comprar
        </button>
      ) : tab == 4 ? (
        <>
        <button
          disabled={amount == 0 || amount > stock.amount}
          onClick={handleSellStock}
        >
          Vender
        </button>
        </>
      ) : null}
    </div>
  );
}

export default StockCard;
