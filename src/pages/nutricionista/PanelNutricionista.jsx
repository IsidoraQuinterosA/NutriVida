import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import AgendaNutricionista from "../../components/organisms/AgendaNutricionista";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarPorNutricionista, cambiarEstado } from "../../services/citasService";
import { fechaHoyISO, ordenarCitas } from "../../utils/fechas";

function PanelNutricionista() {
  const navigate = useNavigate();
  const sesion = useSesion();
  const id = sesion.usuario.nutricionistaId;
  const [citas, setCitas] = useState(() => listarPorNutricionista(id));
  useTituloPagina("Mi panel");

  const hoy = fechaHoyISO();
  const proximas = ordenarCitas(citas).filter(
    (cita) => cita.fecha >= hoy && (cita.estado === "pendiente" || cita.estado === "confirmada")
  );
  const pendientes = citas.filter((cita) => cita.estado === "pendiente").length;

  function actualizarEstado(citaId, estado) {
    cambiarEstado(citaId, estado);
    setCitas(listarPorNutricionista(id));
  }

  return (
    <PlantillaPanel titulo={"Hola, " + sesion.usuario.nombre}>
      <p>Tienes <strong>{pendientes}</strong> cita(s) pendiente(s) de confirmar.</p>

      <h2 className="h5">Próximas citas</h2>
      <AgendaNutricionista
        citas={proximas}
        mensajeVacio="No tienes citas próximas."
        onCambiarEstado={actualizarEstado}
        onVerFicha={(correo) => navigate("/nutricionista/pacientes/" + correo)}
      />
    </PlantillaPanel>
  );
}

export default PanelNutricionista;