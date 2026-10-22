import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";
import { validarCorreo, validarContrasena } from "../../utils/validaciones";

function OrganismoLogin(props) {
  // Un estado por cada campo del formulario
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  // Un solo estado con los mensajes de error de todos los campos
  const [errores, setErrores] = useState({});

  function manejarSubmit(evento) {
    // Evita que el navegador recargue la página
    evento.preventDefault();

    // Se validan TODOS los campos para mostrar todos los errores juntos
    const nuevosErrores = {
      correo: validarCorreo(correo),
      contrasena: validarContrasena(contrasena),
    };

    setErrores(nuevosErrores);

    // Si algún mensaje tiene texto, el formulario no es válido
    let formularioValido = true;
    for (const campo in nuevosErrores) {
      if (nuevosErrores[campo] !== "") {
        formularioValido = false;
      }
    }

    // Solo si todo está correcto se avisa a la página
    if (formularioValido) {
      props.onEnviar({ correo, contrasena });
    }
  }

  // El enlace es un <a> real, pero en vez de recargar la página avisa a props.onRegistrarse
  function irARegistro(evento) {
    evento.preventDefault();
    props.onRegistrarse();
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>

          <h2>Iniciar sesión</h2>

          {/* Error que avisa la página, por ejemplo: correo o contraseña incorrectos */}
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
