import { Container, Row, Col } from "react-bootstrap";
import Boton from "../atoms/Boton";
import LogoAnimado from "../atoms/LogoAnimado";

function Bienvenida(props) {
  return (
    <section className="bienvenida text-center">
      <span className="hoja-decorativa hoja-uno" aria-hidden="true"></span>
      <span className="hoja-decorativa hoja-dos" aria-hidden="true"></span>
      <span className="hoja-decorativa hoja-tres" aria-hidden="true"></span>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={9}>
            <LogoAnimado />

            <h1 className="bienvenida-titulo">
              {props.titulo} {props.tituloDestacado && <span>{props.tituloDestacado}</span>}
            </h1>

            <p className="lead mb-4">{props.descripcion}</p>

            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Boton
                texto={props.textoBoton}
                variante="primary"
                onClick={props.onClickBoton}
              />
              {props.textoBotonSecundario && (
                <Boton
                  texto={props.textoBotonSecundario}
                  variante="outline-ciruela"
                  onClick={props.onClickBotonSecundario}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Bienvenida;
