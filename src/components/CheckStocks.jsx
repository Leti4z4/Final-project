import React from 'react'
import StockCard from './StockCard'

function CheckStocks() {
  
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='check-stocks-container'>
      {
        user.stocks.length ? 
        user.stocks.map((stock) => {
          return <StockCard stock={stock} key={stock.name}/>
      })
      :
      <p style={{color: "lightgray"}}>No tienes acciones disponibles</p>
      }
       
    </div>
  )
}

export default CheckStocks