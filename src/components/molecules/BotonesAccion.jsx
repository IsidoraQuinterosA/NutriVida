import { useState } from "react";
import Boton from "../atoms/Boton";

// Botones Ver / Editar / Eliminar de una fila. Eliminar pide confirmación
// usando estado propio (sin alert ni confirm del navegador).
function BotonesAccion(props) {
  const [confirmando, setConfirmando] = useState(false);

  if (confirmando) {
    return (
      <div className="d-flex flex-wrap align-items-center gap-1">
        <span className="small">¿Eliminar?</span>
        <Boton
          texto="Sí"
          variante="danger"
          tamano="sm"
          onClick={() => {
            setConfirmando(false);
            props.onEliminar();
          }}
        />
        <Boton texto="No" variante="outline-secondary" tamano="sm" onClick={() => setConfirmando(false)} />
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap gap-1">
      {props.onVer && <Boton texto="Ver" variante="outline-secondary" tamano="sm" onClick={props.onVer} />}
      {props.onEditar && <Boton texto="Editar" variante="outline-primary" tamano="sm" onClick={props.onEditar} />}
      {props.onEliminar && (
        <Boton texto="Eliminar" variante="outline-danger" tamano="sm" onClick={() => setConfirmando(true)} />
      )}
    </div>
  );
}

export default BotonesAccion;
