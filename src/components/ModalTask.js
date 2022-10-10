import axios from "axios";
import { useContext, useState } from "react";
import Modal from "react-modal";
import {ModalStyle} from "../styledComponents/ModalStyle"
import { customStyles } from "../styledComponents/ModalStyle";


export default function ModalTask({ toggleModal, setToggleModal }) {
  const [petTask, setPetTask] = useState("");
  const token = localStorage.getItem("token")
  const URL = `${process.env.REACT_APP_API_URL}/pet/task/add` 

  function sendTask() {
    const body = { 
      description: petTask };
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
    >
      <ModalStyle>
        <input
          type="text"
          value={petTask}
          onChange={(e) => setPetTask(e.target.value)}
        ></input>
        <div className="buttons">
          <button onClick={isModalOpen}>
            <p id="decline"> Cancel </p>
          </button>
          <button id="accept" onClick={() => sendTask()}>
            {" "}
            <p>Ok </p>{" "}
          </button>
        </div>
      </ModalStyle>
    </Modal>
  );
}

