import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Input from "../styledComponents/Inputs";
import Header from "./Header";

export default function SignupDog() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [genre, setGenre] = useState("");
  const [breed, setBreed] = useState("");

  const navigate = useNavigate();

  const URL = "http://localhost:4000/new-baby";
  const body = {
    name,
    birthdate,
    genre,
    breed,
  };

  function submmit(event) {
    event.preventDefault();
    axios
      .post(URL, body)
      .then((response) => {
        const { data } = response;
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data[0].message)
      });
  }

  return (
    <>
      <Header />
      <Input>
        <p>New baby</p>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        ></input>
        <Button onClick={submmit}>Cadastrar</Button>
      </Input>
    </>
  );
}

const Button = styled.div`
  width: 220px;
  height: 60px;
  background-color: var(--darkcolor);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;

  :hover {
    cursor: pointer;
    border: solid 2px #555;
    color: #333;
    filter: brightness(1.2);
    transition: all(1.2);
  }
`;
