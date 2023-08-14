import React, { useEffect, useState } from "react";
import "./App.css";
import { users as databaseUsers } from "./constants/constants";
import Pin from "./components/Pin";
import Logo from "./components/Logo";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [pin, setPin] = useState();
  const [pinForm, setPinForm] = useState(false);

  useEffect(() => {
    setUsers(databaseUsers);
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleContinue = () => {
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (localUser) {
      if (localUser.name == name) {
        setPin(localUser.pin);
        setPinForm(true);
      } else {
          alert("Usuario o contraseña incorrectos");
        }
    }
      
    else {
        const foundUser = users.find(
          (user) => user.name == name && user.username == username
        );

        if (foundUser) {
          setPin(foundUser.pin);
          setPinForm(true);
          localStorage.setItem("user", JSON.stringify(foundUser));
        } else{
          alert("Usuario o contraseña incorrectos");
      } 

      }
    }

  return (
    <>
      {pinForm ? (
        <Pin name={name} pin={pin} />
      ) : (
        <>
          <div className="login-container">
            <div className="login-content">
              <div className="login-content-logo-container">
                <Logo />
              </div>
              <h1>Hola de nuevo!</h1>
              <p>Por favor inicia sesión con tu cuenta</p>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleName}
                placeholder="Nombre completo"
              />
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleUsername}
                placeholder="Usuario"
              />
              <button onClick={handleContinue}>Continuar</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
