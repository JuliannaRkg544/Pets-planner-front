import logo from "../assets/imgs/PET's Planner.png"
import Container from "../styledComponents/Container"


import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useContex, useState } from "react"


export default function Login() {
    const navigate = useNavigate()

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    // const [disabled, setDisabled] = useState(false) //disabilita oq?

   //BONUS DO LOCALSTORAGE
    // let foto = localStorage.getItem("foto")
    // let token =localStorage.getItem("token")
    // if (foto!=undefined || token!=undefined){
    //   navigate("/today")
    // }

    const URL_POST = "http://localhost:4000/login"
    const body = {
        email: email,
        password: password
    }

    function login(event) {
        event.preventDefault();
       

        axios.post(URL_POST, body).then(response => {
            const { data } = response;
           
            // navigate("/today")
        }).catch(err => { console.log("deu erro", err.response); alert(err.response.data.message) })
    }

   
    return (
        <Container>
            <div className="logo" ><img src={logo} /></div>
            <div className="logo-body" >
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}  ></input>
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} ></input>
            <button onClick={login} > Entrar</button>
            <Link to={"/signin"} ><span>Não tem conta? Cadastre-se</span></Link>
            </div>
        </Container>
    )
}