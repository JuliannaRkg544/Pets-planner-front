import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Link } from "react-router-dom";
import ModalDelete from "./ModalDelete";

export default function Main() {
  const [del, setDel] = useState(false);
  const [petArr, setPetArr] = useState([]);
  const [change, setChange] = useState(false);
  const [idPet, setIdpet] = useState();
  // const id = idPet.toString()
  const URL_DELETE_PET = `http://localhost:4000/pet/delete/${idPet}`;
  let nature = "";
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
  }, [del]);

  if (petArr.length > 0) {
    if (petArr.isAcat) {
      nature = "cat";
    } else nature = "dog";
    return (
      <Style>
        <Header />
        <p> {dayjs().locale("PT-BR").format("dddd, DD/MM")} </p>
        {petArr.map((pet) => {
          return (
            <PetStyle>
              <Link to={`/pet/get/${pet.id}`}> {pet.name} </Link>
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
        <Footer />
      </Style>
    );
  } else
    return (
      <Style>
        <p>Cadastre seu pet!</p>
      </Style>
    );
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15% 20%;
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
