import TablaMediciones from "./TablaMediciones";
import PlanAlimenticio from "./PlanAlimenticio";
import FormularioMedicion from "./FormularioMedicion";

function FichaPaciente(props) {
  return (
    <>
      <p className="text-body-secondary">{props.pacienteCorreo}</p>

      <h2 className="h5">Historial de mediciones</h2>
      <TablaMediciones mediciones={props.mediciones} />

      <FormularioMedicion hoy={props.hoy} onEnviar={props.onGuardarMedicion} />

      <h2 className="h5">Plan alimenticio</h2>
      <PlanAlimenticio plan={props.plan} />
    </>
  );
}

export default FichaPaciente;