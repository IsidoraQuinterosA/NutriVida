import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";
import { validarFechaCita, validarHoraCita } from "../../utils/validaciones";

function FormularioReprogramar(props) {
  const [fecha, setFecha] = useState(props.fechaActual);
  const [hora, setHora] = useState(props.horaActual);
  const [errores, setErrores] = useState({});

  function manejarSubmit(evento) {
    evento.preventDefault();

    const nuevosErrores = {
      fecha: validarFechaCita(fecha, props.nutricionista, props.hoy),
      hora: validarHoraCita(hora, props.nutricionista),
    };
    setErrores(nuevosErrores);

    if (nuevosErrores.fecha === "" && nuevosErrores.hora === "") {
      props.onEnviar({ fecha, hora });
    }
  }

  return (
    <form onSubmit={manejarSubmit} noValidate>
      <p className="small text-body-secondary">
        {props.nutricionista.nombre} atiende: {props.nutricionista.diasTexto}, de {props.nutricionista.horaInicio} a {props.nutricionista.horaFin}.
      </p>

      {props.errorGeneral && <div className="alert alert-danger" role="alert">{props.errorGeneral}</div>}

      <Row>
        <Col xs={12} md={6}>
          <CampoFormulario label="Nueva fecha" type="date" id="fecha" name="fecha" min={props.hoy} value={fecha}
            onChange={(e) => setFecha(e.target.value)} error={errores.fecha} />
        </Col>
        <Col xs={12} md={6}>
          <CampoFormulario label="Nueva hora" type="time" id="hora" name="hora" step="1800" value={hora}
            onChange={(e) => setHora(e.target.value)} error={errores.hora} />
        </Col>
      </Row>

      <div className="d-flex gap-2">
        <Boton texto="Volver" variante="outline-secondary" onClick={props.onCancelar} />
        <Boton texto="Guardar nuevo horario" type="submit" />
      </div>
    </form>
  );
}

export default FormularioReprogramar;
