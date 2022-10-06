import { useState } from "react";
import Button from "../styledComponents/SubmmitButton";
import ToDoListStyle from "../styledComponents/ToDoListStyle";
import Footer from "./Footer";
import Header from "./Header";
import Task from "./Task";

export default function ToDoList() {
  const [toggleModal,setToggleModal] = useState(false)
  //get tasks by userid
  //criar get no back
  //no fornt fazer request, enviandp config
  //renderizar e estilizar

  //pegar id do usuario pelo contxto
  
  return (
    <>
      <Header />
      <ToDoListStyle>
        <p >levar luginho para passear</p>
        <Button> <p onClick={()=>setToggleModal(!toggleModal ) } > Add task</p></Button>
        <Task toggleModal = {toggleModal}  setToggleModal= {setToggleModal}  />
      </ToDoListStyle>
      <Footer />
    </>
  );
}
