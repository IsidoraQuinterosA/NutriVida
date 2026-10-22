// Interruptor para activar o desactivar algo
function Interruptor(props) {
  return (
    <div className="form-check form-switch d-inline-block">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={props.id}
        checked={props.activo}
        onChange={props.onCambiar}
      />
      <label className="form-check-label small" htmlFor={props.id}>
        {props.activo ? "Activo" : "Inactivo"}
      </label>
    </div>
  );
}

export default Interruptor;
