import axios from "axios";
import Modal from "react-modal";
import { ModalStyle } from "../styledComponents/ModalStyle";
import { customStyles } from "../styledComponents/ModalStyle";



export default function ModalDelete({ toggleModal, setToggleModal, id, URL }) {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    function isModalOpen() {
      setToggleModal(false);
    }


  function deleteTask(id) {
    axios
      .delete(URL, config)
      .then((response) => {
        console.log(response.data);
        console.log("id do delete ", id)
        setToggleModal(false);
      })
      .catch((e) => {
        console.log(e.response)
        setToggleModal(false) 
      });
  }
    return (
      <Modal isOpen={toggleModal} onRequestClose={isModalOpen} style={customStyles}>
        <ModalStyle>
          <div className="buttons">
            <button onClick={isModalOpen}>
              <p id="decline"> No, go back </p>
            </button>
            <button onClick={()=>{deleteTask(id)}} id="accept">
              {" "}
              <p>Yes, delete it </p>{" "}
            </button>
          </div>
        </ModalStyle>
      </Modal>
    );
  }
  