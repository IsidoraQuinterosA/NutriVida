import EtiquetaRol from "../atoms/EtiquetaRol";

// Datos de quien administra (vienen de la sesión)
function PerfilAdmin(props) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Nombre:</strong> {props.usuario.nombre} {props.usuario.apellidos}</li>
        <li className="list-group-item"><strong>Correo:</strong> {props.usuario.correo}</li>
        <li className="list-group-item"><strong>RUN:</strong> {props.usuario.run}</li>
        <li className="list-group-item"><strong>Rol:</strong> <EtiquetaRol rol={props.usuario.rol} /></li>
      </ul>
    </div>
  );
}

export default PerfilAdmin;
