import React, { useState } from "react";

function AddMoney({setShowModal}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [money, setMoney] = useState();

  const handleAddMoney = (e) => {
    setMoney(e.target.value);
  };

  const handleConfirmAdd = (e) => {
    if(Number(money) > 0) {
      user.wallet += Number(money)
      localStorage.setItem("user", JSON.stringify(user));
      setShowModal(false);
    }
  };

  return  (
    <>
    <div className="add-money-container">
      <div className="login-content add-money">
        <h3>Agrega dinero a tu cuenta</h3>
        <div className="add-money-content">
        <input
          type="number"
          name="add-money"
          id="add-money"
          onChange={handleAddMoney}
          placeholder="Cuanto deseas cargar?"
        />
        <button onClick={handleConfirmAdd}>Agregar</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default AddMoney;
