import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import TiposServicios from "./pages/TiposServicios";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Inicio/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/registro" element={<Registro/>} />

        <Route path="/tipos-servicios" element={<TiposServicios/>} />

        <Route path="/servicios" element={<Servicios/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;