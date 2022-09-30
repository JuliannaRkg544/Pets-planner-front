import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Logup from "./Logup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logup" element={<Logup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
