import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Button from "../styledComponents/SubmmitButton";
import ToDoListStyle from "../styledComponents/ToDoListStyle";
import Footer from "./Footer";
import Header from "./Header";
import UserContext from "../Context/UserContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import ModalTask from "./ModalTask";
import ModalDelete from "./ModalDelete";

export default function ToDoList() {
  const [toggleModal, setToggleModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [del, setDel] = useState(false);
  const [idTask, setIdtask] = useState();
  const { user, setUSer } = useContext(UserContext);
  const [marked, setMarked] = useState(false);
  const [filled,setFilled] = useState("-outline")

  const token = localStorage.getItem("token");
  const URL_DELETE_TASK = `${process.env.REACT_APP_API_URL}/pet/task/delete/${idTask}`;
  const URL = `${process.env.REACT_APP_API_URL}/pet/task`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(URL, config)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [toggleModal, del, marked]);

  function riskTask(index, taskid) {
    const URL_PATCH = `${process.env.REACT_APP_API_URL}/pet/task/patch/${taskid}`;
    const body = {
      isDone: tasks[index].done,
    };
    console.log(body);

    axios
      .patch(URL_PATCH, body, config)
      .then((response) => {
        console.log(response.data);
        setMarked(!marked);
      })
      .catch((e) => console.log(e.response));
  }

  if (tasks.length > 0) {
    return (
      <>
        <Header />
        <ToDoListStyle>
          <h1> {dayjs().locale("PT-BR").format("dddd, DD/MM")} </h1>
          {tasks.map((task, index) => {
            return !task.done ? (
              <div className="single-task">
                  <p onClick={() => riskTask(index, task.id)}>
                  {task.description}
                  </p>
                 
               <div className="buttons">
               <span  className="mark-underline" 
                  onClick={() => {
                    riskTask(index, task.id);
                   
                  }}
                 
                >
                  <ion-icon name={`checkbox${filled}`}></ion-icon>
                </span>
                <span className="delete"
                  onClick={() => {
                    setDel(!del);
                    setIdtask(task.id);
                    console.log("id do list ", task.id);
                  }}
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </span>
               </div>
               

                <ModalDelete
                  toggleModal={del}
                  setToggleModal={setDel}
                  id={idTask}
                  URL={URL_DELETE_TASK}
                />
              </div>
            ) : (
              <div className="single-task">
                <p className={filled} onClick={() => riskTask(index, task.id)}>
                  {" "}
                  {task.description}{" "}
                </p>
                <div className="buttons">
                <span  
                  onClick={() => {
                    riskTask(index, task.id);
                  }}
                 
                >
                  <ion-icon name={`checkbox${filled}`}></ion-icon>
                </span>
                <span
                  onClick={() => {
                    setDel(!del);
                    setIdtask(task.id);
                  }}
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </span>

                </div>
                <ModalDelete
                  toggleModal={del}
                  setToggleModal={setDel}
                  id={idTask}
                  URL={URL_DELETE_TASK}
                />
              </div>
            );
          })}
          <Button>
            <span
              onClick={() => {
                setToggleModal(!toggleModal);
              }}
            >
              {" "}
              Add task
            </span>
          </Button>
          <ModalTask
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
          />
        </ToDoListStyle>
        <Footer />
      </>
    );
  } else
    return (
      <>
        <Header />
        <ToDoListStyle>
          <h1> {dayjs().locale("PT-BR").format("dddd, DD/MM")} </h1>
          <Button>
            {" "}
            <span onClick={() => setToggleModal(!toggleModal)}> Add task</span>
          </Button>
          <ModalTask
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
          />
        </ToDoListStyle>
        <Footer />
      </>
    );
}
