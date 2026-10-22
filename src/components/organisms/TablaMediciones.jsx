import { formatearFecha } from "../../utils/fechas";
import { calcularImc } from "../../utils/mediciones";

// Historial de mediciones de un paciente (lo ven el paciente y su nutricionista)
function TablaMediciones(props) {
  if (props.mediciones.length === 0) {
    return <p className="text-body-secondary">Todavía no hay mediciones registradas.</p>;
  }

  return (
    <div className="table-responsive mb-4">
      <table className="table table-sm table-striped align-middle">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Peso (kg)</th>
            <th>Talla (cm)</th>
            <th>IMC</th>
            <th>Cintura (cm)</th>
          </tr>
        </thead>
        <tbody>
          {props.mediciones.map((medicion) => (
            <tr key={medicion.id}>
              <td>{formatearFecha(medicion.fecha)}</td>
              <td>{medicion.peso}</td>
              <td>{medicion.talla}</td>
              <td>{calcularImc(medicion.peso, medicion.talla)}</td>
              <td>{medicion.cintura}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaMediciones;
