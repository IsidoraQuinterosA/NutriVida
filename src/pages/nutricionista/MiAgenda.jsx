import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import AgendaNutricionista from "../../components/organisms/AgendaNutricionista";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarPorNutricionista, cambiarEstado } from "../../services/citasService";
import { ordenarCitas } from "../../utils/fechas";

function MiAgenda() {
  const navigate = useNavigate();
  const sesion = useSesion();
  const id = sesion.usuario.nutricionistaId;
  const [citas, setCitas] = useState(() => listarPorNutricionista(id));
  useTituloPagina("Mi agenda");

  function actualizarEstado(citaId, estado) {
    cambiarEstado(citaId, estado);
    setCitas(listarPorNutricionista(id));
  }

  return (
    <PlantillaPanel titulo="Mi agenda">
      <AgendaNutricionista
        citas={ordenarCitas(citas)}
        mensajeVacio="No tienes citas en tu agenda."
        onCambiarEstado={actualizarEstado}
        onVerFicha={(correo) => navigate("/nutricionista/pacientes/" + correo)}
      />
    </PlantillaPanel>
  );
}

export default MiAgenda;