import { Container, Row, Col } from "react-bootstrap";
import Logo from "../atoms/Logo";

const enlaces = [
  { ruta: "/servicios", texto: "Servicios" },
  { ruta: "/categorias", texto: "Categorías" },
  { ruta: "/ofertas", texto: "Ofertas" },
  { ruta: "/blog", texto: "Blog" },
  { ruta: "/contacto", texto: "Contacto" },
];

function PiePagina(props) {
  function ir(evento, ruta) {
    evento.preventDefault();
    props.onNavegar(ruta);
  }

  return (
    <footer className="pie-pagina mt-auto">
      <Container>
        <Row className="gy-4 text-start">
          <Col xs={12} md={5}>
            <a href="/" onClick={(e) => ir(e, "/")} className="pie-marca">
              <Logo tamano="chico" alt="" claro />
              NutriVida
            </a>
            <p className="mt-2">Clínica Nutricional en Temuco, Región de La Araucanía. Desde 2016.</p>
          </Col>

          <Col xs={6} md={3}>
            <h2 className="pie-titulo">Navegación</h2>
            <ul className="pie-lista">
              {enlaces.map((enlace) => (
                <li key={enlace.ruta}>
                  <a href={enlace.ruta} onClick={(e) => ir(e, enlace.ruta)}>{enlace.texto}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} md={4}>
            <h2 className="pie-titulo">Contacto</h2>
            <ul className="pie-lista">
              <li>{props.clinica.telefono}</li>
              <li>{props.clinica.correo}</li>
              <li>{props.clinica.direccion}</li>
            </ul>
          </Col>
        </Row>

        <p className="pie-derechos">© 2026 Clínica Nutricional NutriVida</p>
      </Container>
    </footer>
  );
}

export default PiePagina;
