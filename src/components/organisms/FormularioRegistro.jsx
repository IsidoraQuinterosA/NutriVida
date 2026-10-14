import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import CampoSelector from "../molecules/CampoSelector";
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
  validarRol,
} from "../../utils/validaciones";

const opcionesRol = [
  { valor: "administrador", texto: "Administrador" },
  { valor: "nutricionista", texto: "Nutricionista" },
  { valor: "paciente", texto: "Paciente" },
];

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
  const [rol, setRol] = useState("");

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
      rol: validarRol(rol),
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
      props.onEnviar({ run, nombre, apellidos, correo, telefono, direccion, rol });
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>

          <h2>Crear cuenta</h2>

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

            <CampoSelector
              label="Rol"
              id="rol"
              name="rol"
              textoInicial="Selecciona un rol"
              opciones={opcionesRol}
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              error={errores.rol}
            />

            <Boton texto="Registrarse" type="submit" />

          </form>

        </Col>
      </Row>
    </Container>
  );
}

export default FormularioRegistro;
