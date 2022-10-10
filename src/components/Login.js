import logo from "../assets/imgs/pets-planner.svg";
import Container from "../styledComponents/Container";
import { Rigth } from "../styledComponents/Container";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext"



export default function Login() {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

  const URL_POST = `${process.env.REACT_APP_API_URL}/login`
  const body = {
    email: email,
    password: password,
  };

  function login(event) {
    event.preventDefault();

    axios
      .post(URL_POST, body)
      .then((response) => {
        const { data } = response;
        console.log(data)
        setUser(data)
        localStorage.setItem("token", data.token)

        navigate("/pets")
      })
      .catch((err) => {
        console.log("deu erro", err.response);
        alert(err.response.data.message);
      });
  }

  return (
    <Container>
      <div className="left">
        <img src={logo} />
      </div>
      <Rigth>
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
        <button onClick={login}> Entrar</button>
        <Link to={"/logup"}>
          <span>Não tem conta? Cadastre-se</span>
        </Link>
      </Rigth>
    </Container>
  );
}
