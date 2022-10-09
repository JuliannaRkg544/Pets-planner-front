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
  const [idTask,setIdtask] = useState()
  const { user, setUSer } = useContext(UserContext);
  const [marked, setMarked] = useState(false);
  // const {token} = user
  const token = localStorage.getItem("token");
  const URL_DELETE_TASK = `http://localhost:4000/pet/task/delete/${idTask}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("token ", token);
  const URL = "http://localhost:4000/pet/task";

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
    const URL_PATCH = `http://localhost:4000/pet/task/patch/${taskid}`;
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
            return task.done ? (
              <div className="single-task">
                <p
                  onClick={() =>{ riskTask(index, task.id) 
                 } }
                  className="underline"
                >
                  {task.description}
                </p>
                <span onClick={() => {
                  setDel(!del)
                setIdtask(task.id) 
                 console.log("id do list ",task.id)}}>
                  <ion-icon name="trash-outline"></ion-icon>
                </span>
                <ModalDelete
                  toggleModal={del}
                  setToggleModal={setDel}
                  id={idTask}
                  URL = {URL_DELETE_TASK}
                />
              </div>
            ) : (
              <div className="single-task">
                <p onClick={() => riskTask(index, task.id)}>
                  {" "}
                  {task.description}{" "}
                </p>
                <span onClick={() => {setDel(!del)
                 setIdtask(task.id)}}>
                  <ion-icon name="trash-outline"></ion-icon>
                </span>
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
          <Button>
            {" "}
            <p onClick={() => setToggleModal(!toggleModal)}> Add task</p>
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
