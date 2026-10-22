import AreaTexto from "../atoms/AreaTexto";

function CampoAreaTexto(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label mb-1">
        {props.label}
      </label>

      <AreaTexto
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        filas={props.filas}
        value={props.value}
        onChange={props.onChange}
        error={props.error}
      />

      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
}

export default CampoAreaTexto;
