import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { config } from "dotenv";
import { useState } from "react";
import Modal from "react-modal";
import { ModalStyle } from "../styledComponents/ModalStyle";
import { customStyles } from "../styledComponents/ModalStyle";

export default function ModalDate({ modal, setModal }) {
  const [date, setDate] = useState("");
  const token = localStorage.getItem("token");
  const URL = ``;
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
        console.log(response.data);
        setModal(false);
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
