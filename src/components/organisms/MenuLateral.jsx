// Menú del panel (paciente, nutricionista o administrador).
// Recibe la lista de enlaces y la ruta actual para marcar el enlace activo.
function MenuLateral(props) {
  function ir(evento, ruta) {
    evento.preventDefault();
    props.onNavegar(ruta);
  }

  return (
    <nav className="list-group mb-4 text-start">
      {props.enlaces.map((enlace) => (
        <a
          key={enlace.ruta}
          href={enlace.ruta}
          onClick={(e) => ir(e, enlace.ruta)}
          className={
            enlace.ruta === props.rutaActual
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
        >
          {enlace.texto}
        </a>
      ))}
    </nav>
  );
}

export default MenuLateral;
