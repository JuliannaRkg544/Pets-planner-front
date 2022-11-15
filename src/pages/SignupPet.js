import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../styledComponents/Inputs";
import Button from "../styledComponents/SubmmitButton";
import Header from "../components/Header";
import Loading from "../components/Loading";

export default function SignupPet() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [genre, setGenre] = useState("");
  const [breed, setBreed] = useState("");
  const [cat, setCat] = useState(false);
  const [dog, setDog] = useState(false);
  const [input1,setInput1] = useState(false)
  const [input2,setInput2] = useState(false)
  const token = localStorage.getItem("token");
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const URL = `${process.env.REACT_APP_API_URL}/pet/new`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    name,
    birthdate: birthdate.split("-").reverse().join("/"),
    genre,
    breed,
    isCat: cat,
    isDog: dog,
  };

  function submmit(event) {
    setDisabled(true);
    event.preventDefault();
    axios
      .post(URL, body, config)
      .then((response) => {
        const { data } = response;
        console.log(data);
        navigate("/pets");
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data[0].message);
        setDisabled(false);
      });
  }

  return (
    <>
      <Header />
      <Input>
        <p>New baby</p>

        <form onSubmit={submmit}>
          <input
            required
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            required
            type="date"
            placeholder="dd/mm/aaaa"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          ></input>
          <label for="genre" >
            <input
              required
              type="radio"
              name="genre"
              id="genre"
              value={input1}
              className="radio-input"
              onClick={() => {
                setGenre("Macho");
              }}
            ></input>
            macho
          </label>
          <label for="genre" >
            <input
              required
              id="genre"
              value={input2}
              type="radio"
              name="genre"
              className="radio-input"
              onClick={() => {
                setGenre("Fêmea");
              }}
            ></input>
            fêmea
          </label>
          <input
            required
            type="text"
           
            placeholder="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          ></input>
          <label for = "nature" >
            <input
              required
              type="radio"
              name="nature"
              value={cat}
              id = "nature"
              className="radio-input"
              onClick={() => {
                setCat(true);
                setDog(false);
              }}
            ></input>
            cat
          </label>
          <label for="nature" >
            <input
              required
              id="nature"
              type="radio"
              name="nature"
              value={dog}
              className="radio-input"
              onClick={() => {
                setDog(true);
                setCat(false);
              }}
            ></input>
            dog
          </label>
          <Button>
        
            <input type="submit" ></input>
          </Button>
        </form>
      </Input>
    </>
  );
}
