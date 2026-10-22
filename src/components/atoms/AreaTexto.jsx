function AreaTexto(props) {
  return (
    <textarea
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      rows={props.filas || 3}
      className={props.error ? "form-control is-invalid" : "form-control"}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default AreaTexto;
