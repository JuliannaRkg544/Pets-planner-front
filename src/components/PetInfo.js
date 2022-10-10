import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import ModalDate from "./ModalDate";
import logoDog from "../assets/imgs/dog-logo.png";
import logoCat from "../assets/imgs/cat-logo.png";

export default function PetInfo() {
  const [petInfo, setPetInfo] = useState([]);
  const [modal, setModal] = useState(false);
  const [vaccine, setVaccine] = useState("");
  const [disabledRadio, setDisabledRadio] = useState(false);
  const token = localStorage.getItem("token");
  let nature = ""
  
  let petHealth = []
  const { idPet } = useParams();
  const { idNature } = useParams();

  const URL = `${process.env.REACT_APP_API_URL}/pet/get/${idNature}/${idPet}`;
  const URL_DATE = `${process.env.REACT_APP_API_URL}/pet/health-${idNature}/patch/${vaccine}/${idPet}`;
  const URL_POST = `${process.env.REACT_APP_API_URL}/pet/health-${idNature}/post/${idPet}`

  if( idNature==="dog") {nature = "Dog"} else {nature = "Cat"}
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  }
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const { data } = response;
        setPetInfo([data]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [disabledRadio]);

  
  
  
  if (petInfo.length > 0) {
  
    const petArr = petInfo[0];
    console.log("pet info ", petInfo[0], "nature ", nature)
    const pet = petArr[0];
    if( idNature==="dog") { petHealth = petInfo[0][0].Dog[0] } else {  petHealth = petInfo[0][0].Cat[0]}
   
    if(pet.isDog){
      if (petInfo[0][0].Dog.length == 0){
        axios.post(URL_POST,{},config)
      } 
    } else{
      if (petInfo[0][0].Cat.length == 0){
        axios.post(URL_POST,{},config)
    }}

    return pet.isDog ?  (
      
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
                  <p>Data: {petHealth.V8_V10_date} </p>
                  <button
                    onClick={() => {
                      setModal(!modal);
                      setVaccine("V8-V10");
                    }}
                  
                    className={`radio-input `}
                    style={
                      petHealth.V8_V10
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                </div>
                <div className="health">
                  <p>Antirábica</p>
                  <p>Data: {petHealth.antirabica_date} </p>
                  <button
                    onClick={() => {
                      setModal(!modal);
                      setVaccine("antirabica");
                    }}
                   
                    className={`radio-input `}
                    style={
                      petHealth.antirabica
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                </div>
                <div className="health">
                  <p>Gripe</p>
                  <p>Data: {petHealth.gripe_date} </p>
                  <button

                    onClick={() => {
                      setModal(!modal);
                      setVaccine("gripe");
                    }}
                    className={`radio-input `}
                  
                    style={
                      petHealth.gripe
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                </div>
              </div>
            
              <div className="health-box">
                Vermífugo:
                <div className="health">
                  <p>1° semestre</p>
                  <p>{petHealth.verm1_date}</p>
                  <button
                    onClick={() => {
                      setModal(!modal);
                      setVaccine("verm1");
                    }}
                    className={`radio-input `}
                   
                    style={
                      petHealth.verm1
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                  <p>2° semestre</p>
                  <p>{petHealth.verm2_date}</p>
                  <button
                    onClick={() => {
                      setModal(!modal);
                      setVaccine("verm2");
                    }}
                    className={`radio-input `}
                
                    style={
                      petHealth.verm2
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                </div>
              </div>
            </DogInfo>
            <ModalDate
                modal={modal}
                setModal={setModal}
                URL={URL_DATE}
                disabledRadio={disabledRadio}
                setDisabledRadio={setDisabledRadio}
              />
          </div>
        </Style>
        <Footer />
      </>
    ) :  (
    
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
                  <p>Data: {petHealth.quadrupla_date} </p>
                  <button
                    onClick={() => {
                      setModal(!modal);
                      setVaccine("quadrupla");
                    }}
                    className={`radio-input `}
                
                    style={
                      petHealth.quadrupla
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                </div>
                <div className="health">
                  <p>Antirábica</p>
                  <p>Data: {petHealth.antirabica_date} </p>
                  <button
                    onClick={() => {
                      setModal(!modal);
                      setVaccine("antirabica");
                    }}
                    className={`radio-input `}
                
                    style={
                      petHealth.antirabica
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                </div>
              </div>
              <ModalDate
                modal={modal}
                setModal={setModal}
                URL={URL_DATE}
                disabledRadio={disabledRadio}
                setDisabledRadio={setDisabledRadio}
              />
              <div className="health-box">
                Vermífugo:
                <div className="health">
                  <p>1° semestre</p>
                  <p>{petHealth.verm1_date}</p>
                  <button
                    onClick={() => {
                      setModal(!modal);
                      setVaccine("verm1");
                    }}
                    className={`radio-input `}
                
                    style={
                      petHealth.verm1
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                  <p >2° semestre</p>
                  <p>{petHealth.verm2_date}</p>
                  <button
                    onClick={() => {
                      setModal(!modal);
                      setVaccine("verm2");
                    }}
                    className={`radio-input `}
                
                    style={
                      petHealth.verm2
                        ? { backgroundColor: "#577ae4" }
                        : { backgroundColor: "#fff" }
                    }
                  ></button>
                </div>
              </div>
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
    width: 18px;
    height: 18px;
    border: 4px solid #fff;
    border-radius: 50%  ;
    margin-right: 10px;
    
    background-color: #fff;
  }
  .marked {
    background-color: blue;
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
    /* flex-wrap: wrap; */
    align-items: center;
    font-size: 18px;
    width: 100%;
    justify-content: space-between;

    /* flex-direct
    ion: column; */
  }
  .health button {
  }
  .health p {
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
