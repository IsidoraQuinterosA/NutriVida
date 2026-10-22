function Input(props) {
  const type = props.type || "text";

  return (
    <input
      type={type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className={props.error ? "form-control is-invalid" : "form-control"}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
      min={props.min}
      max={props.max}
      step={props.step}
      disabled={props.disabled}
    />
  );
}

export default Input;
