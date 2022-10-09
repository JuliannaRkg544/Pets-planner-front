import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Logup from "./Logup";
import ToDoList from "./ToDoList";
import HealthCard from "./HealthCard";
import SignupPet from "./SignupPet";
import PetInfo from "./PetInfo";
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";


function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logup" element={<Logup />} />
          <Route path="/to-do-list" element={<ToDoList />} />
          <Route path="/health-card" element={<HealthCard />} />
          <Route path="/signup-pet" element={<SignupPet />} />
          <Route path="/pet/get/:idNature/:idPet" element={<PetInfo />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
