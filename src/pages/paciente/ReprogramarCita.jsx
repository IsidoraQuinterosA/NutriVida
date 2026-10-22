import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlantillaPanel from "../../components/templates/PlantillaPanel";
import FormularioReprogramar from "../../components/organisms/FormularioReprogramar";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { obtenerCita, reprogramarCita } from "../../services/citasService";
import { obtenerNutricionista } from "../../services/nutricionistasService";
import { fechaHoyISO } from "../../utils/fechas";

function ReprogramarCita() {
  const navigate = useNavigate();
  const params = useParams();
  const sesion = useSesion();
  const [errorGeneral, setErrorGeneral] = useState("");
  useTituloPagina("Reprogramar cita");

  const cita = obtenerCita(params.id);

  // Un paciente solo puede reprogramar sus propias citas
  if (!cita || cita.pacienteCorreo !== sesion.usuario.correo) {
    return (
      <PlantillaPanel titulo="Reprogramar cita">
        <p>No encontramos esa cita entre las tuyas.</p>
      </PlantillaPanel>
    );
  }

  function alGuardar(datos) {
    try {
      reprogramarCita(cita.id, datos.fecha, datos.hora);
      navigate("/paciente/citas");
    } catch (error) {
      setErrorGeneral(error.message);
    }
  }

  return (
    <PlantillaPanel titulo={"Reprogramar " + cita.numero}>
      <FormularioReprogramar
        nutricionista={obtenerNutricionista(cita.nutricionistaId)}
        fechaActual={cita.fecha}
        horaActual={cita.hora}
        hoy={fechaHoyISO()}
        errorGeneral={errorGeneral}
        onEnviar={alGuardar}
        onCancelar={() => navigate("/paciente/citas")}
      />
    </PlantillaPanel>
  );
}

export default ReprogramarCita;
