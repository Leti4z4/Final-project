import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import AddMoney from "./AddMoney";

function Navbar({setShowModal, showModal, setSelectedTab}) {
  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    
    user = JSON.parse(localStorage.getItem("user"));
    
  }, [showModal])
  

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
          <Logo setSelectedTab={setSelectedTab}/>
          <div className="navbar-content-wallet">
            <button onClick={() => setShowModal(true)}>Depositar fondos</button>
            <div className="wallet">
              <img
                src="https://www.svgrepo.com/show/167680/wallet.svg"
                alt="wallet logo"
              />
              <p>{user.wallet}</p>
            </div>
          </div>
        </div>
      </div>
      {
        showModal ?
        <AddMoney setShowModal={setShowModal}/>
        : null
      }
    </>
  );
}

export default Navbar;
