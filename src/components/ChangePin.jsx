import React, { useState } from "react";

function ChangePin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [newPin, setNewPin] = useState();
  const [oldPin, setOldPin] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNewPin = (e) => {
    setNewPin(e.target.value);
  };

  const handleOldPin = (e) => {
    setOldPin(e.target.value);
  };

  const handleConfirmNewPin = (e) => {
    if (oldPin == user.pin) {
      user.pin = newPin;
      localStorage.setItem("user", JSON.stringify(user));
      setError(false);
      setSuccess(true);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return  (
    <>
      <div className="login-content">
        <h3>Cambia tu pin</h3>
        <input
          type="text"
          name="new-pin"
          id="new-pin"
          onChange={handleNewPin}
          placeholder="Nuevo Pin"
        />
        <input
          type="password"
          name="old-pin"
          id="old-pin"
          onChange={handleOldPin}
          placeholder="Antiguo Pin"
        />
        <button onClick={handleConfirmNewPin}>Cambiar Pin</button>
        {error ? (
          <i style={{ color: "#cb2951" }}>El antiguo pin es incorrecto</i>
        ) : null}
        {success ? (
          <i style={{ color: "#136a8a" }}>Pin actualizado correctamente</i>
        ) : null}
      </div>
    </>
  );
}

export default ChangePin;
