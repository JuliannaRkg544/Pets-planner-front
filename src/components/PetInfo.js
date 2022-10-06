import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function PetInfo() {
  const [petInfo, setPetInfo] = useState([]);
  const { idPet } = useParams();
  const URL = `http://localhost:4000/pet/get/${idPet}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const { data } = response;
        setPetInfo([data]);
        console.log("get pet ", data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  if (petInfo.length > 0) {
    const pet = petInfo[0];
    return (
      <>
        <Header />
        <Style>
          <h1>{pet.name}</h1>
          <div className="pet-info">
          <p>Breed: {pet.breed}</p>
          <p>Birthday: {pet.birthdate}</p>
          <p>Genre: {pet.genre}</p>
          </div>
        
        </Style>
        <Footer />
      </>
    );
  } else
    return (
      <>
        <Header />
        <Style> Loading</Style>
        <Footer />
      </>
    );
}

const Style = styled.div`
  display: flex;
  /* margin-top: 100px; */
  flex-direction: column;
  padding: 20%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 30px;
  background-color: blueviolet;
  h1{
    font-family: 'Atma', cursive;
    font-size: 28px;
  }
  .pet-info{
    background-color: blue;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .pet-info p{
    margin: 15px 0;
    font-weight: 600;
  }

`;
