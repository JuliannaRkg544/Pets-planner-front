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
  const [cat, setCat] = useState(false);
  const [dog, setDog] = useState(false);

  const navigate = useNavigate();

  const URL = "http://localhost:4000/pet/new";
  const body = {
    name,
    birthdate,
    genre,
    breed,
    isCat:cat,
    isDog:dog
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
        <p>New baby</p>

        <form onSubmit={submmit} encType="multipart/form-data">
          <input
            required
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            required
            type="text"
            placeholder="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          ></input>
          <input
            required
            type="text"
            placeholder="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          ></input>
          <input
            required
            type="text"
            placeholder="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          ></input>
          <label for="radioCat">
            <input
              required
              type="radio"
              name="pet"
              value={cat}
              id="radioCat"
              className="radio-input"
              onClick={() => {
                setCat(true);
                setDog(false);
                console.log("cat ", cat, "dog ", dog)
              }}
            ></input>
            cat
          </label>
          <label for="radioDog">
            <input
              required
              id="radioDog"
              type="radio"
              name="pet"
              value={dog}
              className="radio-input"
              onClick={() => {
                setDog(true);
                setCat(false);
                console.log("dog",dog, "cat", cat);
              }}
            ></input>
            dog
          </label>

          {/* <input type="file" name="image"></input> */}
          <input type="submit"></input>
        </form>
        {/* <Button onClick={()=>submmit}>Cadastrar</Button> */}
      </Input>
      <Footer />
    </>
  );
}
