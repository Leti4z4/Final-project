import React, { useState } from "react";
import AccountState from "./AccountState";
import Logo from "./Logo";

function Pin({ name, pin }) {
  const [inputPin, setInputPin] = useState();
  const [error, setError] = useState(false);
  const [accountState, setAccountState] = useState(false);

  const handleInputPin = (e) => {
    setInputPin(e.target.value);
  };

  const handleLogin = (e) => {
    if (inputPin == pin) {
      setError(false);
      setAccountState(true);
    } else {
      setError(true);
    }
  };

  return accountState ? (
    <AccountState />
  ) : (
    <>
      <div className="login-container">
        <div className="login-content">
        <Logo />
          <p>{`Hola ${name}, ingresa tu pin para continuar`}</p>
          <input
            type="password"
            name="pin"
            id="pin"
            onChange={handleInputPin}
          />
          <button onClick={handleLogin}>Iniciar Sesión</button>
          {error ? <i style={{ color: "red" }}>El pin es incorrecto</i> : ""}
        </div>
      </div>
    </>
  );
}

export default Pin;
