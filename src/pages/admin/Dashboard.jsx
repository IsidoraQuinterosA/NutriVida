import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import ResumenDashboard from "../../components/organisms/ResumenDashboard";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { listarCitas } from "../../services/citasService";
import { listarServicios, listarCriticos } from "../../services/serviciosService";
import { listarUsuarios } from "../../services/usuarioService";
import { contarPorEstado } from "../../utils/reportes";

function Dashboard() {
  const navigate = useNavigate();
  const [cantidadUsuarios, setCantidadUsuarios] = useState("...");
  useTituloPagina("Dashboard");

  useEffect(() => {
    listarUsuarios()
      .then((usuarios) => setCantidadUsuarios(usuarios.length))
      .catch(() => setCantidadUsuarios("-"));
  }, []);

  const conteo = contarPorEstado(listarCitas());

  const tarjetas = [
    { titulo: "Citas pendientes", numero: conteo.pendiente, textoBoton: "Ver citas", ruta: "/admin/citas" },
    { titulo: "Servicios en el catálogo", numero: listarServicios().length, textoBoton: "Ver servicios", ruta: "/admin/servicios" },
    { titulo: "Usuarios registrados", numero: cantidadUsuarios, textoBoton: "Ver usuarios", ruta: "/admin/usuarios" },
    { titulo: "Servicios críticos", numero: listarCriticos().length, textoBoton: "Ver críticos", ruta: "/admin/criticos" },
  ];

  return (
    <PlantillaPanel titulo="Dashboard">
      <ResumenDashboard tarjetas={tarjetas} onNavegar={navigate} />
    </PlantillaPanel>
  );
}

export default Dashboard;
