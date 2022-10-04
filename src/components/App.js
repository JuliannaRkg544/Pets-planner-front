import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Logup from "./Logup";
import ToDoList from "./ToDoList";
import HealthCard from "./HealthCard";
import SignupDog from "./SignupDog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logup" element={<Logup />} />
        <Route path="/to-do-list" element= {<ToDoList/>}/>     
        <Route path="/health-card" element= {<HealthCard/>}/>    
        <Route path="/signup-dog" element={<SignupDog/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
