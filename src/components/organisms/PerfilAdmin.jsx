import EtiquetaRol from "../atoms/EtiquetaRol";

function PerfilAdmin(props) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Nombre:</strong> {props.usuario.nombre} {props.usuario.apellidos}</li>
        <li className="list-group-item"><strong>Correo:</strong> {props.usuario.correo}</li>
        <li className="list-group-item"><strong>RUN:</strong> {props.usuario.run}</li>
        <li className="list-group-item"><strong>Teléfono:</strong> {props.usuario.telefono || "Sin teléfono"}</li>
        <li className="list-group-item"><strong>Dirección:</strong> {props.usuario.direccion || "Sin dirección"}</li>
        <li className="list-group-item"><strong>Rol:</strong> <EtiquetaRol rol={props.usuario.rol} /></li>
        <li className="list-group-item"><strong>Estado:</strong> {props.usuario.activo ? "Activa" : "Desactivada"}</li>
      </ul>
    </div>
  );
}

export default PerfilAdmin;