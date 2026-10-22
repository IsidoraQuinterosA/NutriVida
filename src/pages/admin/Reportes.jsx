import PlantillaPanel from "../../components/templates/PlantillaPanel";
import ReporteCitas from "../../components/organisms/ReporteCitas";
import { useTituloPagina } from "../../hooks/useTituloPagina";
import { listarCitas } from "../../services/citasService";
import { listarNutricionistas } from "../../services/nutricionistasService";
import {
  contarPorEstado,
  contarPorNutricionista,
  calcularTasaInasistencia,
  calcularIngresos,
} from "../../utils/reportes";

function Reportes() {
  useTituloPagina("Reportes");
  const citas = listarCitas();

  return (
    <PlantillaPanel titulo="Reportes">
      <ReporteCitas
        porEstado={contarPorEstado(citas)}
        porNutricionista={contarPorNutricionista(citas, listarNutricionistas())}
        tasaInasistencia={calcularTasaInasistencia(citas)}
        ingresos={calcularIngresos(citas)}
      />
    </PlantillaPanel>
  );
}

export default Reportes;
