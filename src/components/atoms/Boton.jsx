function Boton(props) {
  const variante = props.variante || "primary";
  const tamano = props.tamano ? " btn-" + props.tamano : "";

  return (
    <button
      type={props.type || "button"}
      className={`btn btn-${variante}${tamano} w-auto`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.texto}
    </button>
  );
}

export default Boton;
