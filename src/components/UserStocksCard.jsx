import { useState, useEffect } from "react";

function UserStocksCard({ user }) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalStockPrice, setTotalStockPrice] = useState(0);

  useEffect(() => {
    let sumAmount = 0;
    let sumStockPrice = 0;
    user.stocks.map((stock) => {
      sumStockPrice += stock.amount * stock.price;
      sumAmount += stock.amount;
    });
    setTotalAmount(sumAmount);
    setTotalStockPrice(sumStockPrice);
  }, []);

  return (
    <>
      <div className="stock-card">
        <div className="stock-card-img">
          <img
            src="https://www.svgrepo.com/show/268816/coin-gold.svg"
            alt="stocks card image"
            width={"40px"}
            height={"auto"}
          />
        </div>
        <div className="stock-card-info">
          <p className="stock-card-stocks">
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "1.5rem",
                color: "#ffaa00",
              }}
            >
              {totalAmount}
            </span>
            <i>acciones disponibles</i>
          </p>
          <p className="stock-card-stocks">
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "1.5rem",
                color: "#136a8a",
              }}
            >
              $ {totalStockPrice}
            </span>{" "}
            <i>valor total en el mercado</i>
          </p>
        </div>
      </div>
    </>
  );
}

export default UserStocksCard;
