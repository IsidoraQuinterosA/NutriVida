import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";
import { validarObligatorio, validarNumeroPositivo } from "../../utils/validaciones";

function FormularioMedicion(props) {
  const [fecha, setFecha] = useState(props.hoy);
  const [peso, setPeso] = useState("");
  const [talla, setTalla] = useState("");
  const [cintura, setCintura] = useState("");
  const [errores, setErrores] = useState({});

  function manejarSubmit(evento) {
    evento.preventDefault();

    const nuevosErrores = {
      fecha: validarObligatorio(fecha, "fecha"),
      peso: validarNumeroPositivo(peso, "peso"),
      talla: validarNumeroPositivo(talla, "talla"),
      cintura: validarNumeroPositivo(cintura, "cintura"),
    };
    setErrores(nuevosErrores);

    let formularioValido = true;
    for (const campo in nuevosErrores) {
      if (nuevosErrores[campo] !== "") {
        formularioValido = false;
      }
    }

    if (formularioValido) {
      props.onEnviar({ fecha, peso: Number(peso), talla: Number(talla), cintura: Number(cintura) });

      setPeso("");
      setTalla("");
      setCintura("");

    }
  }

  return (
    <form onSubmit={manejarSubmit} noValidate className="card card-body mb-4">
      <h2 className="h5">Registrar medición</h2>
      <Row>
        <Col xs={12} md={3}>
          <CampoFormulario label="Fecha" type="date" id="fecha" name="fecha" value={fecha}
            onChange={(e) => setFecha(e.target.value)} error={errores.fecha} />
        </Col>
        <Col xs={12} md={3}>
          <CampoFormulario label="Peso (kg)" type="number" step="0.1" id="peso" name="peso" value={peso}
            onChange={(e) => setPeso(e.target.value)} error={errores.peso} />
        </Col>
        <Col xs={12} md={3}>
          <CampoFormulario label="Talla (cm)" type="number" id="talla" name="talla" value={talla}
            onChange={(e) => setTalla(e.target.value)} error={errores.talla} />
        </Col>
        <Col xs={12} md={3}>
          <CampoFormulario label="Cintura (cm)" type="number" id="cintura" name="cintura" value={cintura}
            onChange={(e) => setCintura(e.target.value)} error={errores.cintura} />
        </Col>
      </Row>
      <div>
        <Boton texto="Guardar medición" type="submit" />
      </div>
    </form>
  );
}

export default FormularioMedicion;