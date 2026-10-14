import Selector from "../atoms/Selector";

function CampoSelector(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label mb-1">
        {props.label}
      </label>

      <Selector
        id={props.id}
        name={props.name}
        textoInicial={props.textoInicial}
        opciones={props.opciones}
        value={props.value}
        onChange={props.onChange}
        error={props.error}
      />

      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
}

export default CampoSelector;
