import logo from "../assets/imgs/pets-planner.svg";
import Container, { Rigth } from "../styledComponents/Container";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../components/Loading"

export default function Logup() {
  const navigate = useNavigate();
  const URL_POST = `${process.env.REACT_APP_API_URL}/logup`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");
  const [disabled, setDisabled] = useState(false)

  const body = {
    name: name,
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation,
  };

  function logup(event) {
    event.preventDefault();
    setDisabled(true)

    axios
      .post(URL_POST, body)
      .then((response) => {
        const { data } = response;
        console.log(data)
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("oops, algum erro ocorreu :/");
        setDisabled(false)
      });
  }

  return (
    <Container>
      <div className="left">
        <img src={logo} />
      </div>

      <Rigth>
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
          type="password"
          placeholder="Confirmar senha"
          value={passwordConfirmation}
          onChange={(e) => setpasswordConfirmation(e.target.value)}
        ></input>
        <button onClick={logup}> {disabled? <Loading/> : "Cadastrar"} </button>
        <Link to={"/"}>
          {" "}
          <span>Já tem uma conta? Faça login</span>
        </Link>
      </Rigth>
    </Container>
  );
}
