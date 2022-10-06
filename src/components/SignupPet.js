import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Input from "../styledComponents/Inputs";
import Button from "../styledComponents/SubmmitButton";
import Footer from "./Footer";
import Header from "./Header";

export default function SignupPet() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [genre, setGenre] = useState("");
  const [breed, setBreed] = useState("");

  const navigate = useNavigate();

  const URL = "http://localhost:4000/pet/new";
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
        alert(error.response.data[0].message);
      });
  }

  return (
    <>
      <Header />
      <Input>
      <form action="http://localhost:4000/pet/new" encType="multipart/form-data" method="post" >
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
       
          <input
            type="file"
            class="form-control-file"
            name="uploaded_file"
          ></input>
      <input  type="submit" value="Submit" ></input>
     </form>
        <Button onClick={()=>submmit}>Cadastrar</Button>
      </Input>
      <Footer/>
    </>
  );
}


