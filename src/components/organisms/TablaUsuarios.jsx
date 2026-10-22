import FilaUsuario from "../molecules/FilaUsuario";

function TablaUsuarios(props) {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.usuarios.map((usuario) => (
            <FilaUsuario
              key={usuario.id}
              id={usuario.id}
              nombre={usuario.nombre + " " + usuario.apellidos}
              correo={usuario.correo}
              rol={usuario.rol}
              activo={usuario.activo}
              onCambiarActivo={() => props.onCambiarActivo(usuario.id)}
              onHistorial={() => props.onHistorial(usuario.id)}
              onEditar={() => props.onEditar(usuario.id)}
              onEliminar={() => props.onEliminar(usuario.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUsuarios;
