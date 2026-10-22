import PlantillaPanel from "../../components/templates/PlantillaPanel";
import TablaMediciones from "../../components/organisms/TablaMediciones";
import PlanAlimenticio from "../../components/organisms/PlanAlimenticio";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { useSesion } from "../../hooks/useSesion";
import { listarMediciones, obtenerPlan } from "../../services/fichaService";

// El paciente solo ve SUS mediciones y SU plan (se buscan con su propio correo)
function MiProgreso() {
  const sesion = useSesion();
  useTituloPagina("Mi progreso");

  return (
    <PlantillaPanel titulo="Mi progreso y plan">
      <h2 className="h5">Historial de mediciones</h2>
      <TablaMediciones mediciones={listarMediciones(sesion.usuario.correo)} />

      <h2 className="h5">Mi plan alimenticio</h2>
      <PlanAlimenticio plan={obtenerPlan(sesion.usuario.correo)} />
    </PlantillaPanel>
  );
}

export default MiProgreso;
