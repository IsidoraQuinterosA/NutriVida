import { Container, Row, Col, Form } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";
import { useNavigate } from "react-router-dom";




function OrganismoLogin() {
  const navigate = useNavigate();

  function manejarSubmit(event) {
    event.preventDefault();
    navigate("/TiposServicios");
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>

          <h2>Login</h2>

          <Form onSubmit={manejarSubmit}>

            <CampoFormulario
              label="Correo electrónico"
              type="email"
              id="correo"
              name="correo"
              placeholder="Ej: juan@duoc.cl"
              required
            />

            <CampoFormulario
              label="Contraseña"
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Ingresa tu contraseña"
              required
            />

            <Boton
              texto="Iniciar Sesión"
              type="submit"
              variante="primary"
            />






<<<<<<< HEAD
          <div className="registro-boton">
=======
       <div className="registro-boton">
>>>>>>> 5adda85307b7c1fe00111e76714231772dc70598
            <Boton
              texto="registrarse"
             onClick={() => navigate("/Registro")}
            />
          </div>

          </Form>

        </Col>
      </Row>
    </Container>
  );
}

export default OrganismoLogin;