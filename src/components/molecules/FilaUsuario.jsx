import EtiquetaRol from "../atoms/EtiquetaRol";
import Interruptor from "../atoms/Interruptor";
import Boton from "../atoms/Boton";
import BotonesAccion from "./BotonesAccion";

function FilaUsuario(props) {
  return (
    <tr>
      <td>{props.nombre}</td>
      <td>{props.correo}</td>
      <td><EtiquetaRol rol={props.rol} /></td>
      <td>
        <Interruptor id={"activo-" + props.id} activo={props.activo} onCambiar={props.onCambiarActivo} />
      </td>
      <td>
        <div className="d-flex flex-wrap gap-1">
          {props.rol === "paciente" && (
            <Boton texto="Historial" variante="outline-secondary" tamano="sm" onClick={props.onHistorial} />
          )}
          <BotonesAccion onEditar={props.onEditar} onEliminar={props.onEliminar} />
        </div>
      </td>
    </tr>
  );
}

export default FilaUsuario;
