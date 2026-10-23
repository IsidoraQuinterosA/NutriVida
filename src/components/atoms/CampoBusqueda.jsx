function CampoBusqueda (props) {
    return (
        <input
        type = "search"
        className="form-control"
        placeholder={props.placeholder || "Buscar..."}
        aria-label={props.etiqueta || "Buscar"}
        value={props.value}
        onChange={props.onChange}
        />
    );
}
export default CampoBusqueda;