import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Logup from "../pages/Logup";
import ToDoList from "../pages/ToDoList";
import SignupPet from "../pages/SignupPet";
import PetInfo from "../pages/PetInfo";
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
 
function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pets" element={<Main />} />
          <Route path="/logup" element={<Logup />} />
          <Route path="/to-do-list" element={<ToDoList />} />
          <Route path="/signup-pet" element={<SignupPet />} />
          <Route path="/pet/get/:idNature/:idPet" element={<PetInfo />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
