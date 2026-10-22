import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";
import {
  validarRun,
  validarNombre,
  validarApellidos,
  validarCorreo,
  validarConfirmarCorreo,
  validarContrasena,
  validarConfirmarContrasena,
  validarDireccion,
} from "../../utils/validaciones";

function FormularioRegistro(props) {
  // Un estado por cada campo del formulario
  const [run, setRun] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [confirmarCorreo, setConfirmarCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  // Un solo estado con los mensajes de error de todos los campos
  const [errores, setErrores] = useState({});

  function manejarSubmit(evento) {
    // Evita que el navegador recargue la página
    evento.preventDefault();

    // Se validan TODOS los campos para mostrar todos los errores juntos
    const nuevosErrores = {
      run: validarRun(run),
      nombre: validarNombre(nombre),
      apellidos: validarApellidos(apellidos),
      correo: validarCorreo(correo),
      confirmarCorreo: validarConfirmarCorreo(confirmarCorreo, correo),
      contrasena: validarContrasena(contrasena),
      confirmarContrasena: validarConfirmarContrasena(confirmarContrasena, contrasena),
      direccion: validarDireccion(direccion),
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
      // El registro público siempre crea un paciente: los demás roles los asigna el administrador
      props.onEnviar({ run, nombre, apellidos, correo, contrasena, telefono, direccion });
    }
  }

  // El enlace es un <a> real, pero en vez de recargar la página avisa a props.onIniciarSesion
  function irAIniciarSesion(evento) {
    evento.preventDefault();
    props.onIniciarSesion();
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>

          <h2 className="titulo-formulario">Crear cuenta</h2>

          {props.errorGeneral && (
            <div className="alert alert-danger" role="alert">{props.errorGeneral}</div>
          )}

          <form onSubmit={manejarSubmit} noValidate>

            <CampoFormulario
              label="RUN"
              id="run"
              name="run"
              placeholder="Ej: 123456785"
              value={run}
              onChange={(e) => setRun(e.target.value)}
              error={errores.run}
            />

            <CampoFormulario
              label="Nombres"
              id="nombre"
              name="nombre"
              placeholder="Ej: Juan Pablo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              error={errores.nombre}
            />

            <CampoFormulario
              label="Apellidos"
              id="apellidos"
              name="apellidos"
              placeholder="Ej: García López"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              error={errores.apellidos}
            />

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
              label="Confirmar correo electrónico"
              type="email"
              id="confirmar-correo"
              name="confirmarCorreo"
              placeholder="Repite tu correo"
              value={confirmarCorreo}
              onChange={(e) => setConfirmarCorreo(e.target.value)}
              error={errores.confirmarCorreo}
            />

            <CampoFormulario
              label="Contraseña"
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Mínimo 8 caracteres"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              error={errores.contrasena}
            />

            <CampoFormulario
              label="Confirmar contraseña"
              type="password"
              id="confirmar-contrasena"
              name="confirmarContrasena"
              placeholder="Repite tu contraseña"
              value={confirmarContrasena}
              onChange={(e) => setConfirmarContrasena(e.target.value)}
              error={errores.confirmarContrasena}
            />

            <CampoFormulario
              label="Teléfono (opcional)"
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="+56 9 1234 5678"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />

            <CampoFormulario
              label="Dirección"
              id="direccion"
              name="direccion"
              placeholder="Ej: Calle 123, Temuco"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              error={errores.direccion}
            />

            <Boton texto="Registrarse" type="submit" />

          <div className="registro-boton">
            <p className="mb-0">
              ¿Ya tienes cuenta?{" "}
              <a href="/login" onClick={irAIniciarSesion}>Inicia sesión</a>
            </p>
          </div>
            

          </form>

        </Col>
      </Row>
    </Container>
  );
}

export default FormularioRegistro;
