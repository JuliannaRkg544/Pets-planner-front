import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Button from "../styledComponents/SubmmitButton";
import ToDoListStyle from "../styledComponents/ToDoListStyle";
import Footer from "./Footer";
import Header from "./Header";
import Task from "./Task";
import UserContext from "../Context/UserContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function ToDoList() {
  const [toggleModal, setToggleModal] = useState(false);
  const [tasks, setTasks] = useState([])
  const {user, setUSer} = useContext(UserContext)
  // const {token} = user
  const token =localStorage.getItem("token")
 
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("token ", token)
  const URL = "http://localhost:4000/pet/task";
  useEffect(() => {
    axios
      .get(URL, config)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data)
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [toggleModal]);

  console.log("data ",   dayjs().locale("PT-BR").format("dddd, DD/MM"))

 if(tasks.length>0){
  return (
    <>
      <Header />
      <ToDoListStyle>
      <h1> {dayjs().locale("PT-BR").format("dddd, DD/MM")} </h1>
        {tasks.map((task)=>{
          return <p>{task.description}</p>
        })}
        <Button>
          <span onClick={() => {setToggleModal(!toggleModal) } } > Add task</span>
        </Button>
        <Task toggleModal={toggleModal} setToggleModal={setToggleModal} />
      </ToDoListStyle>
      <Footer />
    </>
  );
 } else return(
  <>
  <Header />
  <ToDoListStyle>
    <Button>
      {" "}
      <p onClick={() => setToggleModal(!toggleModal)}> Add task</p>
    </Button>
    <Task toggleModal={toggleModal} setToggleModal={setToggleModal} />
  </ToDoListStyle>
  <Footer />
</>

 )
 
}
