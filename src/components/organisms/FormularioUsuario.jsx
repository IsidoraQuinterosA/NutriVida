import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import CampoSelector from "../molecules/CampoSelector";
import Boton from "../atoms/Boton";
import {
  validarRun,
  validarNombre,
  validarApellidos,
  validarCorreo,
  validarContrasena,
  validarRol,
  validarNutricionista,
} from "../../utils/validaciones";
import { nombresDeRol } from "../../utils/roles";

const opcionesRol = Object.keys(nombresDeRol).map((rol) => ({ valor: rol, texto: nombresDeRol[rol] }));

function FormularioUsuario(props) {
  const inicial = props.usuarioInicial;
  const esEdicion = Boolean(inicial);

  const [run, setRun] = useState(esEdicion ? inicial.run : "");
  const [nombre, setNombre] = useState(esEdicion ? inicial.nombre : "");
  const [apellidos, setApellidos] = useState(esEdicion ? inicial.apellidos : "");
  const [correo, setCorreo] = useState(esEdicion ? inicial.correo : "");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState(esEdicion ? inicial.rol : "");
  const [nutricionistaId, setNutricionistaId] = useState(esEdicion && inicial.nutricionistaId ? inicial.nutricionistaId : "");
  const [telefono, setTelefono] = useState(esEdicion ? inicial.telefono : "");
  const [direccion, setDireccion] = useState(esEdicion ? inicial.direccion : "");
  const [errores, setErrores] = useState({});

  const opcionesNutricionista = props.nutricionistas.map((n) => ({ valor: n.id, texto: n.nombre }));

  function manejarSubmit(evento) {
    evento.preventDefault();

    const nuevosErrores = {
      run: validarRun(run),
      nombre: validarNombre(nombre),
      apellidos: validarApellidos(apellidos),
      correo: validarCorreo(correo),
      contrasena: esEdicion && contrasena === "" ? "" : validarContrasena(contrasena),
      rol: validarRol(rol),
      nutricionistaId: rol === "nutricionista" ? validarNutricionista(nutricionistaId) : "",
    };
    setErrores(nuevosErrores);

    let formularioValido = true;
    for (const campo in nuevosErrores) {
      if (nuevosErrores[campo] !== "") {
        formularioValido = false;
      }
    }

    if (formularioValido) {
      const datos = {
        run: run.trim(),
        nombre: nombre.trim(),
        apellidos: apellidos.trim(),
        correo: correo.trim(),
        rol,
        nutricionistaId: rol === "nutricionista" ? nutricionistaId : null,
        telefono: telefono.trim(),
        direccion: direccion.trim(),
      };

      if (contrasena !== "") {
        datos.contrasena = contrasena;
      }

      props.onEnviar(datos);
    }
  }

  return (
    <form onSubmit={manejarSubmit} noValidate>
      {props.errorGeneral && <div className="alert alert-danger" role="alert">{props.errorGeneral}</div>}

      <Row>
        <Col xs={12} md={4}>
          <CampoFormulario label="RUN" id="run" name="run" placeholder="Ej: 123456785" value={run}
            onChange={(e) => setRun(e.target.value)} error={errores.run} />
        </Col>
        <Col xs={12} md={4}>
          <CampoFormulario label="Nombres" id="nombre" name="nombre" value={nombre}
            onChange={(e) => setNombre(e.target.value)} error={errores.nombre} />
        </Col>
        <Col xs={12} md={4}>
          <CampoFormulario label="Apellidos" id="apellidos" name="apellidos" value={apellidos}
            onChange={(e) => setApellidos(e.target.value)} error={errores.apellidos} />
        </Col>
        <Col xs={12} md={6}>
          <CampoFormulario label="Correo electrónico" type="email" id="correo" name="correo" value={correo}
            onChange={(e) => setCorreo(e.target.value)} error={errores.correo} />
        </Col>
        <Col xs={12} md={6}>
          <CampoFormulario label={esEdicion ? "Nueva contraseña (opcional)" : "Contraseña"} type="password"
            id="contrasena" name="contrasena" placeholder="Mínimo 8 caracteres" value={contrasena}
            onChange={(e) => setContrasena(e.target.value)} error={errores.contrasena} />
        </Col>
        <Col xs={12} md={6}>
          <CampoSelector label="Rol" id="rol" name="rol" textoInicial="Selecciona un rol" opciones={opcionesRol}
            value={rol} onChange={(e) => setRol(e.target.value)} error={errores.rol} />
        </Col>
        <Col xs={12} md={6}>
          {rol === "nutricionista" && (
            <CampoSelector label="Perfil de nutricionista" id="nutricionista" name="nutricionista"
              textoInicial="Selecciona un nutricionista" opciones={opcionesNutricionista}
              value={nutricionistaId} onChange={(e) => setNutricionistaId(e.target.value)} error={errores.nutricionistaId} />
          )}
        </Col>
        <Col xs={12} md={6}>
          <CampoFormulario label="Teléfono (opcional)" type="tel" id="telefono" name="telefono" value={telefono}
            onChange={(e) => setTelefono(e.target.value)} />
        </Col>
        <Col xs={12} md={6}>
          <CampoFormulario label="Dirección (opcional)" id="direccion" name="direccion" value={direccion}
            onChange={(e) => setDireccion(e.target.value)} />
        </Col>
      </Row>

      <div className="d-flex gap-2">
        <Boton texto="Cancelar" variante="outline-secondary" onClick={props.onCancelar} />
        <Boton texto={esEdicion ? "Guardar cambios" : "Crear usuario"} type="submit" />
      </div>
    </form>
  );
}

export default FormularioUsuario;
