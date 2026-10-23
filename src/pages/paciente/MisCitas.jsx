import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import ListaMisCitas from "../../components/organisms/ListaMisCitas";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarPorPaciente, cambiarEstado } from "../../services/citasService";
import { agregarNombreNutricionista } from "../../services/nutricionistasService";
import { ordenarCitas } from "../../utils/fechas";

function MisCitas() {
  const navigate = useNavigate();
  const sesion = useSesion();
  useTituloPagina("Mis citas");

  const [citas, setCitas] = useState(() => listarPorPaciente(sesion.usuario.correo));

  function cancelar(id) {
    cambiarEstado(id, "cancelada");
    setCitas(listarPorPaciente(sesion.usuario.correo));
  }

  function reprogramar(id) {
    navigate("/paciente/citas/" + id + "/reprogramar");
  }

  return (
    <PlantillaPanel titulo="Mis citas">
      <ListaMisCitas
        citas={agregarNombreNutricionista(ordenarCitas(citas))}
        mensajeVacio="Todavía no tienes citas."
        onCancelar={cancelar}
        onReprogramar={reprogramar}
      />
    </PlantillaPanel>
  );
}

export default MisCitas;
