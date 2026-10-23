import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";
import Logo from "../atoms/Logo";
import { validarCorreo, validarContrasena } from "../../utils/validaciones";

function OrganismoLogin(props) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [errores, setErrores] = useState({});

  function manejarSubmit(evento) {
    evento.preventDefault();

    const nuevosErrores = {
      correo: validarCorreo(correo),
      contrasena: validarContrasena(contrasena),
    };

    setErrores(nuevosErrores);

    let formularioValido = true;
    for (const campo in nuevosErrores) {
      if (nuevosErrores[campo] !== "") {
        formularioValido = false;
      }
    }

    if (formularioValido) {
      props.onEnviar({ correo, contrasena });
    }
  }

  function irARegistro(evento) {
    evento.preventDefault();
    props.onRegistrarse();
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>

          <Logo tamano="mediano" alt="" />
          <h2>Iniciar sesión</h2>

          {props.errorGeneral && (
            <div className="alert alert-danger" role="alert">{props.errorGeneral}</div>
          )}

          <form onSubmit={manejarSubmit} noValidate>

            <CampoFormulario
              label="Correo electrónico"
              type="email"
              id="correo"
              name="correo"
              placeholder="Ej: nombre@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              error={errores.correo}
            />

            <CampoFormulario
              label="Contraseña"
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Ingresa tu contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              error={errores.contrasena}
            />

            <Boton
              texto="Iniciar Sesión"
              type="submit"
              variante="primary"
            />

            <p className="mt-3 mb-0">
              ¿No tienes cuenta?{" "}
              <a href="/registro" onClick={irARegistro}>Regístrate</a>
            </p>

          </form>

        </Col>
      </Row>
    </Container>
  );
}

export default OrganismoLogin;
