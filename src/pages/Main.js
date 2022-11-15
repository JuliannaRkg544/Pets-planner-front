import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Link } from "react-router-dom";
import ModalDelete from "../components/ModalDelete";

export default function Main() {
  const [del, setDel] = useState(false);
  const [petArr, setPetArr] = useState([]);
  const [idPet, setIdpet] = useState();
  const URL_DELETE_PET = `${process.env.REACT_APP_API_URL}/pet/delete/${idPet}`;
  const token = localStorage.getItem("token")
  let nature = "";
  const URL_GET = `${process.env.REACT_APP_API_URL}/pet/get`

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  useEffect(() => {
    axios
      .get(URL_GET,config)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setPetArr(data);
      })
      .catch((err) => console.log(err.response));
  }, [del]);

  if (petArr.length > 0) {
    
    return (
      <Style>
        <Header />
        <p> {dayjs().locale("PT-BR").format("dddd, DD/MM")} </p>
        {petArr.map((pet) => {
          if (pet.isCat) {
            nature = "cat";
          } else nature = "dog";
          return (
            <PetStyle key={pet.id} >
              <Link to={`/pet/get/${nature}/${pet.id}`}> {pet.name} </Link>
              <span
                onClick={() => {
                  setIdpet(pet.id);
                  setDel(!del);
                }}
              >
                <ion-icon name="trash-outline"></ion-icon>
              </span>
            </PetStyle>
          );
        })}
        <ModalDelete
          toggleModal={del}
          setToggleModal={setDel}
          id={idPet}
          URL={URL_DELETE_PET}
        />
        <Link className="main" to={"/signup-pet"}>
          {" "}
          <button>New Baby</button>
        </Link>
       
      </Style>
    );
  } else
    return (
      <Style>
        <Header/> 
        <p>Cadastre seu pet!</p>
        <Link className="main" to={"/signup-pet"}>
          {" "}
          <button>New Baby</button>
        </Link>
      </Style>
    );
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15% 20%;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
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
  justify-content: space-between;
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
  a {
    text-decoration: none;
    width: fit-content;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    cursor: pointer;
  }
`;
