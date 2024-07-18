import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

function Login() {
    const[ userName, setUserName ] = useState('')
    const[ password, setPassword ] = useState('')

    const HandleSubmit = () => {
        event.preventDefault()
        
        
    }

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input type="email" 
          placeholder="E-mail"
          onChange={(e) => setUserName(e.target.value)}
        />
          <FaUser className="icon"/>
        </div>
        <div className="input-field">
          <input type="password" 
          placeholder="Senha" 
          onChange={(e) => setPassword(e. target.value)}
        />
          <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
            <label>
                <input type='checkbox' />
                Lembrar de mim
            </label>
            <a href="#">Esqueceu a Senha?</a>
        </div>
        <button>Entrar</button>

        <div className="singnup-link">
            <p>
                Não tem uma Conta? <a href="#">Registrar </a>
            </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
