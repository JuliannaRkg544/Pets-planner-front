import logo from "../assets/imgs/pets-planner.png";
import Container from "../styledComponents/Container";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Logup() {
  const navigate = useNavigate()
  const URL_POST = "http://localhost:4000/logup";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");

  const body = {
    name: name,
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation,
  };

  function logup(event) {
    event.preventDefault();

    axios
      .post(URL_POST, body)
      .then((response) => {
        const { data } = response;
        navigate("/login")
      })
      .catch((error) => {
        console.log(error.response);
        alert("humm, algo está errado");
      });
  }

  return (
    <Container>
      <div className="left">
        <img src={logo} />
      </div>
      <div className="right">

      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        type="url"
        placeholder="Confirmar senha"
        value={passwordConfirmation}
        onChange={(e) => setpasswordConfirmation(e.target.value)}
      ></input>
      <button onClick={logup}> Cadastrar</button>
      <Link to={"/login"}>
        {" "}
        <span>Já tem uma conta? Faça login</span>
      </Link>
      </div>
    </Container>
  );
}
