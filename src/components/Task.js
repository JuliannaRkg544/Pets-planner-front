import axios from "axios";
import { useContext, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import UserContext from "../Context/UserContext";

export default function Task({ toggleModal, setToggleModal }) {
  const [petTask, setPetTask] = useState("");
  const {user, setUSer} = useContext(UserContext)
  const {token} = user

  function sendTask() {
    const body = { petTask };
    const URL = "http://localhost:4000/pet/task/add";
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,
      },
    }
    axios
      .post(URL, body, config)
      .then((response) => {
        console.log(response.data);
        setToggleModal(false)
      })
      .catch((e) =>   setToggleModal(false)) 
    }
   ;

   function isModalOpen(){
    setToggleModal(false)
   }
  
  
  return (
    <Modal
      isOpen={toggleModal}
      onRequestClose={isModalOpen}
      style={customStyles}
      // onAfterOpen={afterOpenModal}
      contentLabel="Example Modal"
    >
      <ModalStyle>
        <input
          type="text"
          value={petTask}
          onChange={(e) => setPetTask(e.target.value)}
        ></input>
        <div className="buttons">
          <button onClick={isModalOpen}>
            <p id="decline"> No, go back </p>
          </button>
          <button id="accept" onClick={() => sendTask()}>
            {" "}
            <p>Yes, delete it </p>{" "}
          </button>
        </div>
      </ModalStyle>
    </Modal>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#333",
    borderRadius: "50px",
    minWidth: "300px",
    minHeight: "162px",
  },
};

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  p {
    font-size: 34px;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  button {
    margin-top: 30px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #fff;
    border-radius: 5px;
    height: 37px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  }
  button p {
    font-size: 18px;
  }
  button:hover {
    filter: brightness(1.2);
    transition: (0.5s);
    cursor: pointer;
  }
  #accept {
    background-color: var(--darkcolor);
    color: #fff;
  }
  #decline {
    background-color: #fff;
    color: var(--darkcolor);
  }
  @media screen and (max-width: 431px) {
    p {
      font-size: 20px;
    }
    button {
      height: 30px;
    }
    button p {
      font-size: 15px;
    }
  }
`;
