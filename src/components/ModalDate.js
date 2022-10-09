import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { ModalStyle } from "../styledComponents/ModalStyle";
import { customStyles } from "../styledComponents/ModalStyle";

export default function ModalDate({ modal, setModal, URL, disabledRadio, setDisabledRadio }) {
  const [date, setDate] = useState("");
  const token = localStorage.getItem("token");
 
  const body = {date} 
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function isModalOpen() {
    setModal(false);
  }
  function submmitDate() {
    axios
      .patch(URL,body,config)
      .then((response) => {
        console.log("data date modal ",response.data);
        setModal(false);
        setDisabledRadio(!disabledRadio)
      })
      .catch((e) => {
        console.log(e.response);
        setModal(false);
      });
  }
  return (
    <Modal isOpen={modal} onRequestClose={isModalOpen} style={customStyles}>
      <ModalStyle>
        <input
          type="text"
          value={date}
          placeholder="dd/mm/aaaa"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
        <div className="buttons">
          <button onClick={isModalOpen}>
            <p id="decline"> Cancel </p>
          </button>
          <button id="accept" onClick={() => submmitDate()}>
            {" "}
            <p>Ok </p>{" "}
          </button>
        </div>
      </ModalStyle>
    </Modal>
  );
}
