import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import CampoSelector from "../molecules/CampoSelector";
import CampoAreaTexto from "../molecules/CampoAreaTexto";
import Boton from "../atoms/Boton";
import {
  validarNombre,
  validarApellidos,
  validarCorreo,
  validarNutricionista,
  validarFechaCita,
  validarHoraCita,
  validarMotivo,
} from "../../utils/validaciones";

function FormularioConfirmacion(props) {
  const [nombre, setNombre] = useState(props.datosIniciales.nombre);
  const [apellidos, setApellidos] = useState(props.datosIniciales.apellidos);
  const [correo, setCorreo] = useState(props.datosIniciales.correo);
  const [nutricionistaId, setNutricionistaId] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [motivo, setMotivo] = useState("");
  const [errores, setErrores] = useState({});

  const nutricionista = props.nutricionistas.find((n) => n.id === nutricionistaId);
  const opcionesNutricionista = props.nutricionistas.map((n) => ({
    valor: n.id,
    texto: n.nombre + " · " + n.especialidad,
  }));

  function manejarSubmit(evento) {
    evento.preventDefault();

    const nuevosErrores = {
      nombre: validarNombre(nombre),
      apellidos: validarApellidos(apellidos),
      correo: validarCorreo(correo),
      nutricionistaId: validarNutricionista(nutricionistaId),
      fecha: validarFechaCita(fecha, nutricionista, props.hoy),
      hora: validarHoraCita(hora, nutricionista),
      motivo: validarMotivo(motivo),
    };

    setErrores(nuevosErrores);

    let formularioValido = true;
    for (const campo in nuevosErrores) {
      if (nuevosErrores[campo] !== "") {
        formularioValido = false;
      }
    }

    if (formularioValido) {
      props.onEnviar({
        pacienteNombre: nombre.trim() + " " + apellidos.trim(),
        pacienteCorreo: correo.trim(),
        nutricionistaId,
        fecha,
        hora,
        motivo: motivo.trim(),
      });
    }
  }

  return (
    <form onSubmit={manejarSubmit} noValidate className="text-start">
      <h2 className="h5">Tus datos</h2>
      <Row>
        <Col xs={12} md={6}>
          <CampoFormulario label="Nombre" id="nombre" name="nombre" value={nombre}
            onChange={(e) => setNombre(e.target.value)} error={errores.nombre} />
        </Col>
        <Col xs={12} md={6}>
          <CampoFormulario label="Apellidos" id="apellidos" name="apellidos" value={apellidos}
            onChange={(e) => setApellidos(e.target.value)} error={errores.apellidos} />
        </Col>
      </Row>
      <CampoFormulario label="Correo electrónico" type="email" id="correo" name="correo" value={correo}
        onChange={(e) => setCorreo(e.target.value)} error={errores.correo} />

      <h2 className="h5 mt-4">Datos de la cita</h2>
      <CampoSelector
        label="Nutricionista preferido"
        id="nutricionista"
        name="nutricionista"
        textoInicial="Selecciona un nutricionista"
        opciones={opcionesNutricionista}
        value={nutricionistaId}
        onChange={(e) => setNutricionistaId(e.target.value)}
        error={errores.nutricionistaId}
      />

      {nutricionista && (
        <p className="small text-body-secondary">
          Atiende: {nutricionista.diasTexto}, de {nutricionista.horaInicio} a {nutricionista.horaFin}.
        </p>
      )}

      <Row>
        <Col xs={12} md={6}>
          <CampoFormulario label="Fecha" type="date" id="fecha" name="fecha" min={props.hoy} value={fecha}
            onChange={(e) => setFecha(e.target.value)} error={errores.fecha} />
        </Col>
        <Col xs={12} md={6}>
          <CampoFormulario label="Hora" type="time" id="hora" name="hora" step="1800" value={hora}
            onChange={(e) => setHora(e.target.value)} error={errores.hora} />
        </Col>
      </Row>

      <CampoAreaTexto
        label="Motivo de la consulta"
        id="motivo"
        name="motivo"
        placeholder="Ej: quiero mejorar mi alimentación para entrenar"
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
        error={errores.motivo}
      />

      <div className="d-flex flex-column flex-md-row gap-2">
        <Boton texto="Volver a mi solicitud" variante="outline-secondary" onClick={props.onVolver} />
        <Boton texto="Confirmar cita" type="submit" />
      </div>
    </form>
  );
}

export default FormularioConfirmacion;
