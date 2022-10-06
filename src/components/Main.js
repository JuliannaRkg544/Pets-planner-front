import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../styledComponents/Inputs";
import Footer from "./Footer";
import Header from "./Header";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Link } from "react-router-dom";

export default function Main() {
  const [petArr, setPetArr] = useState([]);
  const [change, setChange] = useState(false);
  const URL = "http://localhost:4000/pet/get";
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setPetArr(data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  if (petArr.length > 0)
    return (
      <Style>
        <Header />
        <p> {dayjs().locale("PT-BR").format("dddd, DD/MM")} </p>
        {petArr.map((pet) => {
          return (
            <Link to={`/pet/get/${pet.id}`} >
            <PetStyle >
              {pet.name}
            </PetStyle>
            </Link>
          );
        })}
        <Link to={"/signup-pet"}>
          {" "}
          <button>New Baby</button>
        </Link>
        <Footer />
      </Style>
    );
  else
    return (
      <Style>
        <p>Cadastre seu pet!</p>
      </Style>
    );
}

const Style = styled.div`
  display: flex;
  /* margin-top: 100px; */
  flex-direction: column;
  padding: 100px;
  align-items: center;
  justify-content: center;
  button {
    width: 303px;
    height: 45px;
    margin: 10px 0;
    color: #000;
    font-size: 21px;
    border-radius: 4.64px;
    border: 1px #aaa;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: var(--darkcolor);
    margin-bottom: 25px;
    font-weight: 700;
  }
  button:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;

const PetStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px;
  width: 100%;
  height: 45px;
  margin: 20px 0;
  color: #000;
  font-size: 18px;
  border: 1px solid #aaa;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4.64px;
  background-color: #fff;
`;
