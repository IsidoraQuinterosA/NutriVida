import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import ListaMisCitas from "../../components/organisms/ListaMisCitas";
import Boton from "../../components/atoms/Boton";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarPorPaciente } from "../../services/citasService";
import { agregarNombreNutricionista } from "../../services/nutricionistasService";
import { fechaHoyISO, ordenarCitas } from "../../utils/fechas";

function PanelPaciente() {
  const navigate = useNavigate();
  const sesion = useSesion();
  useTituloPagina("Mi panel");

  const hoy = fechaHoyISO();
  // Próximas citas: desde hoy en adelante y que sigan activas
  const proximas = ordenarCitas(listarPorPaciente(sesion.usuario.correo)).filter(
    (cita) => cita.fecha >= hoy && (cita.estado === "pendiente" || cita.estado === "confirmada")
  );

  return (
    <PlantillaPanel titulo={"Hola, " + sesion.usuario.nombre}>
      <h2 className="h5">Tus próximas citas</h2>
      <ListaMisCitas
        citas={agregarNombreNutricionista(proximas)}
        mensajeVacio="No tienes citas próximas."
      />
      <Boton texto="Agendar nueva cita" onClick={() => navigate("/servicios")} />
    </PlantillaPanel>
  );
}

export default PanelPaciente;
