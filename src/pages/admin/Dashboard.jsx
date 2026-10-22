import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import ResumenDashboard from "../../components/organisms/ResumenDashboard";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { listarCitas } from "../../services/citasService";
import { listarServicios, listarCriticos } from "../../services/serviciosService";
import { listarUsuarios } from "../../services/usuariosService";
import { contarPorEstado } from "../../utils/reportes";

function Dashboard() {
  const navigate = useNavigate();
  useTituloPagina("Dashboard");

  const conteo = contarPorEstado(listarCitas());

  const tarjetas = [
    { titulo: "Citas pendientes", numero: conteo.pendiente, textoBoton: "Ver citas", ruta: "/admin/citas" },
    { titulo: "Servicios en el catálogo", numero: listarServicios().length, textoBoton: "Ver servicios", ruta: "/admin/servicios" },
    { titulo: "Usuarios registrados", numero: listarUsuarios().length, textoBoton: "Ver usuarios", ruta: "/admin/usuarios" },
    { titulo: "Servicios críticos", numero: listarCriticos().length, textoBoton: "Ver críticos", ruta: "/admin/criticos" },
  ];

  return (
    <PlantillaPanel titulo="Dashboard">
      <ResumenDashboard tarjetas={tarjetas} onNavegar={navigate} />
    </PlantillaPanel>
  );
}

export default Dashboard;
