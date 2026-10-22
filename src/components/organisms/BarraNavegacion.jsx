import { Navbar, Nav, Container } from "react-bootstrap";
import Boton from "../atoms/Boton";

const enlaces = [
  { ruta: "/", texto: "Inicio" },
  { ruta: "/servicios", texto: "Servicios" },
  { ruta: "/categorias", texto: "Categorías" },
  { ruta: "/ofertas", texto: "Ofertas" },
  { ruta: "/nosotros", texto: "Nosotros" },
  { ruta: "/blog", texto: "Blog" },
  { ruta: "/contacto", texto: "Contacto" },
];

function BarraNavegacion(props) {
  // Los enlaces son <a> reales, pero en vez de recargar la página
  // avisamos a props.onNavegar. preventDefault() cancela la recarga.
  function ir(evento, ruta) {
    evento.preventDefault();
    props.onNavegar(ruta);
  }

  return (
    // expand="lg": bajo 992px los enlaces se esconden tras el botón ☰
    // collapseOnSelect: el menú ☰ se cierra solo al elegir un enlace
    <Navbar expand="lg" bg="body-tertiary" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/" onClick={(e) => ir(e, "/")}>
          NutriVida
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            {enlaces.map((enlace) => (
              <Nav.Link
                key={enlace.ruta}
                href={enlace.ruta}
                onClick={(e) => ir(e, enlace.ruta)}
              >
                {enlace.texto}
              </Nav.Link>
            ))}
          </Nav>

          {/* En celular los botones van uno bajo el otro y centrados; desde lg, uno al lado del otro */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 py-2 py-lg-0">
            <Boton
              texto={"Mi solicitud (" + props.cantidadSolicitud + ")"}
              variante="outline-secondary"
              onClick={() => props.onNavegar("/mi-solicitud")}
            />

            {props.usuario ? (
              <>
                <Boton
                  texto={"Mi panel (" + props.usuario.nombre + ")"}
                  variante="primary"
                  onClick={() => props.onNavegar(props.rutaPanel)}
                />
                <Boton
                  texto="Cerrar sesión"
                  variante="outline-primary"
                  onClick={props.onCerrarSesion}
                />
              </>
            ) : (
              <>
                <Boton
                  texto="Iniciar sesión"
                  variante="primary"
                  onClick={() => props.onNavegar("/login")}
                />
                <Boton
                  texto="Registrarse"
                  variante="outline-primary"
                  onClick={() => props.onNavegar("/registro")}
                />
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
