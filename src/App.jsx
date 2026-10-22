import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutaProtegida from "./routes/RutaProtegida";

// Públicas
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import DetalleServicioPagina from "./pages/DetalleServicioPagina";
import Categorias from "./pages/Categorias";
import Categoria from "./pages/Categoria";
import Ofertas from "./pages/Ofertas";
import Nosotros from "./pages/Nosotros";
import Blog from "./pages/Blog";
import EntradaBlog from "./pages/EntradaBlog";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import NoEncontrada from "./pages/NoEncontrada";
// Flujo de la cita
import MiSolicitud from "./pages/MiSolicitud";
import ConfirmarCita from "./pages/ConfirmarCita";
import CitaExitosa from "./pages/CitaExitosa";
import CitaError from "./pages/CitaError";
// Paciente
import PanelPaciente from "./pages/paciente/PanelPaciente";
import MisCitas from "./pages/paciente/MisCitas";
import ReprogramarCita from "./pages/paciente/ReprogramarCita";
import MiProgreso from "./pages/paciente/MiProgreso";
// Nutricionista
import PanelNutricionista from "./pages/nutricionista/PanelNutricionista";
import MiAgenda from "./pages/nutricionista/MiAgenda";
import MisPacientes from "./pages/nutricionista/MisPacientes";
import FichaPacientePagina from "./pages/nutricionista/FichaPacientePagina";
// Administrador
import Dashboard from "./pages/admin/Dashboard";
import CitasAdmin from "./pages/admin/CitasAdmin";
import ComprobanteCitaPagina from "./pages/admin/ComprobanteCitaPagina";
import ServiciosAdmin from "./pages/admin/ServiciosAdmin";
import NuevoServicio from "./pages/admin/NuevoServicio";
import EditarServicio from "./pages/admin/EditarServicio";
import CategoriasAdmin from "./pages/admin/CategoriasAdmin";
import NuevaCategoria from "./pages/admin/NuevaCategoria";
import EditarCategoria from "./pages/admin/EditarCategoria";
import UsuariosAdmin from "./pages/admin/UsuariosAdmin";
import NuevoUsuario from "./pages/admin/NuevoUsuario";
import EditarUsuario from "./pages/admin/EditarUsuario";
import HistorialUsuarioPagina from "./pages/admin/HistorialUsuarioPagina";
import Criticos from "./pages/admin/Criticos";
import Reportes from "./pages/admin/Reportes";
import Perfil from "./pages/admin/Perfil";

// Atajos para no repetir <RutaProtegida rol="..."> en cada ruta privada
function SoloPaciente(props) {
  return <RutaProtegida rol="paciente">{props.children}</RutaProtegida>;
}
function SoloNutricionista(props) {
  return <RutaProtegida rol="nutricionista">{props.children}</RutaProtegida>;
}
function SoloAdmin(props) {
  return <RutaProtegida rol="administrador">{props.children}</RutaProtegida>;
}

// El mapa de rutas: para cada dirección, qué página se dibuja.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:codigo" element={<DetalleServicioPagina />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:id" element={<Categoria />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<EntradaBlog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Flujo de la cita (la "solicitud") */}
        <Route path="/mi-solicitud" element={<MiSolicitud />} />
        <Route path="/confirmar-cita" element={<ConfirmarCita />} />
        <Route path="/cita-exitosa" element={<CitaExitosa />} />
        <Route path="/cita-error" element={<CitaError />} />

        {/* Paciente */}
        <Route path="/paciente" element={<SoloPaciente><PanelPaciente /></SoloPaciente>} />
        <Route path="/paciente/citas" element={<SoloPaciente><MisCitas /></SoloPaciente>} />
        <Route path="/paciente/citas/:id/reprogramar" element={<SoloPaciente><ReprogramarCita /></SoloPaciente>} />
        <Route path="/paciente/progreso" element={<SoloPaciente><MiProgreso /></SoloPaciente>} />

        {/* Nutricionista */}
        <Route path="/nutricionista" element={<SoloNutricionista><PanelNutricionista /></SoloNutricionista>} />
        <Route path="/nutricionista/agenda" element={<SoloNutricionista><MiAgenda /></SoloNutricionista>} />
        <Route path="/nutricionista/pacientes" element={<SoloNutricionista><MisPacientes /></SoloNutricionista>} />
        <Route path="/nutricionista/pacientes/:correo" element={<SoloNutricionista><FichaPacientePagina /></SoloNutricionista>} />

        {/* Administrador */}
        <Route path="/admin" element={<SoloAdmin><Dashboard /></SoloAdmin>} />
        <Route path="/admin/citas" element={<SoloAdmin><CitasAdmin /></SoloAdmin>} />
        <Route path="/admin/citas/:id" element={<SoloAdmin><ComprobanteCitaPagina /></SoloAdmin>} />
        <Route path="/admin/servicios" element={<SoloAdmin><ServiciosAdmin /></SoloAdmin>} />
        <Route path="/admin/servicios/nuevo" element={<SoloAdmin><NuevoServicio /></SoloAdmin>} />
        <Route path="/admin/servicios/:codigo/editar" element={<SoloAdmin><EditarServicio /></SoloAdmin>} />
        <Route path="/admin/categorias" element={<SoloAdmin><CategoriasAdmin /></SoloAdmin>} />
        <Route path="/admin/categorias/nueva" element={<SoloAdmin><NuevaCategoria /></SoloAdmin>} />
        <Route path="/admin/categorias/:id/editar" element={<SoloAdmin><EditarCategoria /></SoloAdmin>} />
        <Route path="/admin/usuarios" element={<SoloAdmin><UsuariosAdmin /></SoloAdmin>} />
        <Route path="/admin/usuarios/nuevo" element={<SoloAdmin><NuevoUsuario /></SoloAdmin>} />
        <Route path="/admin/usuarios/:id/editar" element={<SoloAdmin><EditarUsuario /></SoloAdmin>} />
        <Route path="/admin/usuarios/:id/historial" element={<SoloAdmin><HistorialUsuarioPagina /></SoloAdmin>} />
        <Route path="/admin/criticos" element={<SoloAdmin><Criticos /></SoloAdmin>} />
        <Route path="/admin/reportes" element={<SoloAdmin><Reportes /></SoloAdmin>} />
        <Route path="/admin/perfil" element={<SoloAdmin><Perfil /></SoloAdmin>} />

        {/* Cualquier otra dirección */}
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
