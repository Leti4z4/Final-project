import React from 'react'
import StockCard from './StockCard'

function SellStocks({tab, setUser}) {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='check-stocks-container'>
      {
        user.stocks.length ?
        user.stocks.map((stock) => {
          return <StockCard stock={stock} key={stock.name} tab={tab} setUser={setUser}/>
      })
      :
      <p style={{color: "lightgray"}}>No has comprado ninguna acción</p>
      }
    </div>
  )
}

export default SellStocks