import React from "react";

function UserWallet() {

  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="user-card">
      <div className="user-card-img">
        <img
          src="https://www.svgrepo.com/show/167680/wallet.svg"
          alt="user card image"
          width={"40px"}
          height={"auto"}
        />
      </div>
      <div className="user-card-info">
        <p>$ {user.wallet}</p>
      </div>
    </div>
  );
}

export default UserWallet;
