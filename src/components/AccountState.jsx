import React, { useState } from "react";
import ChangePin from "./ChangePin";
import Navbar from "./Navbar";
import BuyStocks from "./BuyStocks";
import CheckStocks from "./CheckStocks";
import SellStocks from "./SellStocks";
import UserCard from "./UserCard";
import UserStocksCard from "./UserStocksCard";
import UserWallet from "./UserWallet";

function AccountState() {
  const tabs = [
    "Cambiar PIN",
    "Revisar acciones",
    "Comprar acciones",
    "Vender acciones",
    "Depositar fondos",
    "Generar estado de cuenta",
    "Finalizar sesión",
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [showModal, setShowModal] = useState(false);

  const handleTab = (index) => {
    setSelectedTab(index + 1);
  };

  const handleLogOut = () => {
    window.location.reload();
  }

  console.log(selectedTab);

  return (
    <div className="account-state-container">
      <Navbar setSelectedTab={setSelectedTab} setShowModal={setShowModal} showModal={showModal}/>
      <div className="account-state-content">
        <div className="account-state-menu-container">
          <ul>
            {tabs.map((tab, index) => {
              return (
                <li onClick={() => index == 4 ? setShowModal(true) : 
                index == 6 ? handleLogOut('asd') :
                handleTab(index)} key={tab}>
                  {tab}
                </li>
                
              );
            })}
          </ul>
        </div>
        <div className="account-state-content-container">
          {
            selectedTab == 0 || selectedTab == 6 ? (
              <div className="user-content-container">
              <div className="user-content-user-info">
              <UserCard user={user}/>
              <UserWallet user={user}/>
              </div>
              <UserStocksCard user={user}/>
              <CheckStocks user={user} tab={selectedTab}/>
              </div>
            ) :
             selectedTab == 1 ? (
            <ChangePin />
          ) : selectedTab == 2 ? (
            <CheckStocks user={user} tab={selectedTab}/>
          ) : selectedTab == 3 ? (
            <BuyStocks setUser={setUser} tab={selectedTab}/>
          ) : selectedTab == 4 ? (
            <SellStocks user={user} tab={selectedTab} setUser={setUser}/>
          ) : 
            null
          }
        </div>
      </div>
    </div>
  );
}

export default AccountState;
