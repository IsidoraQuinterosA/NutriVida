import { Navbar, Nav, Container } from "react-bootstrap";
import Boton from "../atoms/Boton";
import Logo from "../atoms/Logo";

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
  function ir(evento, ruta) {
    evento.preventDefault();
    props.onNavegar(ruta);
  }

  return (
    <Navbar expand="lg" sticky="top" collapseOnSelect className="barra-principal">
      <Container>
        <Navbar.Brand href="/" onClick={(e) => ir(e, "/")} className="d-flex align-items-center gap-2 barra-marca">
          <Logo tamano="chico" alt="" />
          NutriVida
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            {enlaces.map((enlace) => (
              <Nav.Link
                key={enlace.ruta}
                href={enlace.ruta}
                active={enlace.ruta === props.rutaActual}
                onClick={(e) => ir(e, enlace.ruta)}
              >
                {enlace.texto}
              </Nav.Link>
            ))}
          </Nav>

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
