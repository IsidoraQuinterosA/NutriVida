import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import TiposServicios from "./pages/TiposServicios";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route path="/login" element={<Login/>} />

        <Route path="/tipos-servicios" element={<TiposServicios/>} />

        <Route path="/servicios" element={<Servicios/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;