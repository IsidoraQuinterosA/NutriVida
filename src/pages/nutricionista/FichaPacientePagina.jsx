import { useState } from "react";
import { useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FichaPaciente from "../../components/organisms/FichaPaciente";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarPorNutricionista } from "../../services/citasService";
import { listarMediciones, crearMedicion, obtenerPlan } from "../../services/fichaService";
import { fechaHoyISO } from "../../utils/fechas";

function FichaPacientePagina() {
  const params = useParams();
  const sesion = useSesion();
  const nutricionistaId = sesion.usuario.nutricionistaId;
  const [mediciones, setMediciones] = useState(() => listarMediciones(params.correo));
  useTituloPagina("Ficha del paciente");

  const citaDelPaciente = listarPorNutricionista(nutricionistaId).find(
    (cita) => cita.pacienteCorreo === params.correo
  );

  if (!citaDelPaciente) {
    return (
      <PlantillaPanel titulo="Ficha del paciente">
        <div className="alert alert-warning" role="alert">
          No tienes acceso a la ficha de este paciente.
        </div>
      </PlantillaPanel>
    );
  }

  function guardarMedicion(datos) {
    crearMedicion({ ...datos, pacienteCorreo: params.correo, nutricionistaId });
    setMediciones(listarMediciones(params.correo));
  }

  return (
    <PlantillaPanel titulo={"Ficha de " + citaDelPaciente.pacienteNombre}>
      <FichaPaciente
        pacienteCorreo={params.correo}
        mediciones={mediciones}
        plan={obtenerPlan(params.correo)}
        hoy={fechaHoyISO()}
        onGuardarMedicion={guardarMedicion}
      />
    </PlantillaPanel>
  );
}

export default FichaPacientePagina;