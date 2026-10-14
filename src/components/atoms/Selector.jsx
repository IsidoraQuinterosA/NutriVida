// props.opciones es una lista de objetos { valor, texto }.
// Ej: [{ valor: "paciente", texto: "Paciente" }]
function Selector(props) {
  return (
    <select
      id={props.id}
      name={props.name}
      className={props.error ? "form-select is-invalid" : "form-select"}
      value={props.value}
      onChange={props.onChange}
    >
      <option value="">{props.textoInicial}</option>

      {props.opciones.map((opcion) => (
        <option key={opcion.valor} value={opcion.valor}>
          {opcion.texto}
        </option>
      ))}
    </select>
  );
}

export default Selector;
