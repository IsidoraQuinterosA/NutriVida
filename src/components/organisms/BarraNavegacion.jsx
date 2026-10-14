import { Navbar, Nav, Container } from "react-bootstrap";
import Boton from "../atoms/Boton";

const enlaces = [
  { ruta: "/", texto: "Inicio" },
  { ruta: "/tipos-servicios", texto: "Tipos de servicios" },
  { ruta: "/servicios", texto: "Servicios" },
];

function BarraNavegacion(props) {
  // Los enlaces son <a> reales, pero en vez de recargar la página
  // avisamos a props.onNavegar. preventDefault() cancela la recarga.
  function ir(evento, ruta) {
    evento.preventDefault();
    props.onNavegar(ruta);
  }

  return (
    // expand="md": en pantallas chicas los enlaces se esconden tras el botón ☰
    // collapseOnSelect: el menú ☰ se cierra solo al elegir un enlace
    <Navbar expand="md" bg="success" data-bs-theme="dark" collapseOnSelect>
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

          <div className="d-flex gap-2 py-2 py-md-0">
            <Boton
              texto="Iniciar sesión"
              variante="light"
              onClick={() => props.onNavegar("/login")}
            />
            <Boton
              texto="Registrarse"
              variante="outline-light"
              onClick={() => props.onNavegar("/registro")}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
