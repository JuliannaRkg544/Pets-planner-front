import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import ModalDate from "./ModalDate";
import logoDog from "../assets/imgs/dog-logo.png";
import logoCat from "../assets/imgs/cat-logo.png"

export default function PetInfo() {
  const [petInfo, setPetInfo] = useState([]);
  const [date, setDate] = useState("");
  const [modal, setModal] = useState(false);
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

    return pet.isDog ? (
      <>
        <Header />
        <Style>
          <div className="top">
            <h1>{pet.name}</h1>
            <div className="img-box">
              <img src={logoDog} />
            </div>
          </div>
          <div className="pet-info">
            <p>Breed: {pet.breed}</p>
            <p>Birthday: {pet.birthdate}</p>
            <p>Genre: {pet.genre}</p>
            <DogInfo>
              {" "}
              <div className="health-box">
                Vacinas:
                <div className="health">
                  <p>V8/V10</p>
                  <p>Data: {date} </p>
                  <label for="pet">
                    <input
                      onClick={() => setModal(!modal)}
                      type="radio"
                      id="pet"
                      className="radio-input"
                    ></input>
                    
                  </label>
                </div>
                <div className="health">
                  <p>Antirábica</p>
                  <p>Data: {date} </p>
                  <label for="pet">
                    <input
                      onClick={() => setModal(!modal)}
                      type="radio"
                      id="pet"
                      className="radio-input"
                    ></input>
                    
                  </label>
                </div>
                <div className="health">
                  <p>Gripe</p>
                  <p>Data: {date} </p>
                  <label for="pet">
                    <input
                      onClick={() => setModal(!modal)}
                      type="radio"
                      id="pet"
                      className="radio-input"
                    ></input>
                    
                  </label>
                </div>
              </div>
              <ModalDate modal={modal} setModal={setModal} />
              <div className="health-box">
                Vermífugo:
                <div className="health">
                  <p>1° semestre</p>
                  <p>{date}</p>
                  <label for="verm1">
                    <input
                      onClick={() => setModal(!modal)}
                      type="radio"
                      id="verm1"
                      className="radio-input"
                    ></input>
                    
                  </label>
                  <p>2° semestre</p>
                  <p>{date}</p>
                  <label for="verm2">
                    <input
                      onClick={() => setModal(!modal)}
                      type="radio"
                      id="verm2"
                      className="radio-input"
                    ></input>
                    
                  </label>
                </div>
              </div>
              {/* <label for="pet">
              <input type="radio" id="pet" className="radio-input"></input>Gripe
            </label>{" "} */}
            </DogInfo>
          </div>
        </Style>
        <Footer />
      </>
    ) : (
      <>
        <Header />
         <Style>
          <div className="top">
            <h1>{pet.name}</h1>
            <div className="img-box">
              <img src={logoCat} />
            </div>
          </div>
          <div className="pet-info">
            <p>Breed: {pet.breed}</p>
            <p>Birthday: {pet.birthdate}</p>
            <p>Genre: {pet.genre}</p>
            <DogInfo>
              {" "}
              <div className="health-box">
                Vacinas:
                <div className="health">
                  <p>Quádrupla</p>
                  <p>Data: {date} </p>
                  <label for="pet">
                    <input
                     onClick={() => setModal(!modal)}
                     checked = {modal}
                      type="radio"
                      id="pet"
                      className="radio-input"
                    ></input>
                     {console.log(modal)}
                    
                  </label>
                </div>
                <div className="health">
                  <p>Antirábica</p>
                  <p>Data: {date} </p>
                  <label for="pet">
                    <input
                      onClick={() => setModal(!modal)}
                      type="radio"
                      id="pet"
                      className="radio-input"
                    ></input>
                    
                  </label>
                </div>
              </div>
              <ModalDate modal={modal} setModal={setModal} />
              <div className="health-box">
                Vermífugo:
                <div className="health">
                  <p>1° semestre</p>
                  <p>{date}</p>
                  <label for="verm1">
                    <input
                      onClick={() => setModal(!modal)}
                      type="radio"
                      id="verm1"
                      className="radio-input"
                    ></input>
                    
                  </label>
                  <p>2° semestre</p>
                  <p>{date}</p>
                  <label for="verm2">
                    <input
                      onClick={() => setModal(!modal)}
                      type="radio"
                      id="verm2"
                      className="radio-input"
                    ></input>
                    
                  </label>
                </div>
              </div>
              {/* <label for="pet">
              <input type="radio" id="pet" className="radio-input"></input>Gripe
            </label>{" "} */}
            </DogInfo>
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
  padding: 15% 20%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 30px;
  /* background-color: var(--darkcolor); */

  .top {
    width: 100%;
 
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 80px;

    img {
      width: 100px;
      height: 100px;
      position: relative;

    }
  }

  h1 {
    font-family: "Atma", cursive;
    font-size: 28px;
    margin-bottom: 15px;
  }
  .pet-info {
    background-color: var(--darkcolor);
    border-radius: 30px;
    padding: 3% 5%;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    /* height: 100%; */
  }
  .pet-info p {
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 0 5px;
    width: 100%;
    margin: 10px 0;
    color: #696969;
    font-size: 18px;
    border: 1px solid #aaa;
    border-radius: 4.64px;
    background-color: #fff;
  }
`;

const DogInfo = styled.div`
  width: 100%;
  .radio-input {
    width: 1.25em;
    height: 1.25em;
    margin-right: 10px;
  }
  label {
    display: inline-flex;
    align-items: center;
  }
  input {
    width: 303px;
    height: 38px;
    background-color: brown;
    margin: 0px 0;
    color: #696969;
    font-size: 18px;
    border: 1px solid #aaa;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 4.64px;
  }
  .health-box {
    display: flex;
    justify-content: center;
    font-size: 18px;
    flex-direction: column;
    width: 100%;
  }
  .health {
    display: flex;
    align-items: center;
    font-size: 18px;
    width: 100%;
    justify-content: space-between;

    /* flex-direction: column; */
  }
  .health p{
    font-size: 15px;
  }
  p {
    margin: 15px 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 0 5px;
    width: 40px;
    height: 25px;
    margin: 10px 0;
    color: #696969;
    font-size: 15px;
    border: 1px solid #aaa;
    /* box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25); */
    border-radius: 4.64px;
    background-color: #fff;
  }
`;
