import { Row, Col } from "react-bootstrap";
import TarjetaNutricionista from "../molecules/TarjetaNutricionista";

function EquipoNutricionistas(props) {
  return (
    <Row>
      {props.nutricionistas.map((nutricionista) => (
        <Col key={nutricionista.id} xs={12} md={6} lg={3} className="mb-3">
          <TarjetaNutricionista
            nombre={nutricionista.nombre}
            especialidad={nutricionista.especialidad}
            dias={nutricionista.diasTexto}
            horario={nutricionista.horaInicio + " a " + nutricionista.horaFin}
          />
        </Col>
      ))}
    </Row>
  );
}

export default EquipoNutricionistas;