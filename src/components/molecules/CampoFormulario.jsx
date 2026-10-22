import Input from "../atoms/Input";

function CampoFormulario(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label mb-1">
        {props.label}
      </label>

      <Input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        error={props.error}
        min={props.min}
        max={props.max}
        step={props.step}
        disabled={props.disabled}
      />

      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
}

export default CampoFormulario;
