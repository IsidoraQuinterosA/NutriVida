import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import DetalleServicio from "../components/organisms/DetalleServicio";
import Boton from "../components/atoms/Boton";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitud } from "../hooks/useSolicitud";
import { obtenerServicio } from "../services/serviciosService";
import { obtenerCategoria } from "../services/categoriasService";

function DetalleServicioPagina() {
  const navigate = useNavigate();
  const params = useParams();
  const solicitud = useSolicitud();
  const [agregado, setAgregado] = useState(false);

  const servicio = obtenerServicio(params.codigo);
  useTituloPagina(servicio ? servicio.nombre : "Servicio no encontrado");

  if (!servicio) {
    return (
      <PlantillaPrincipal>
        <Container className="py-5">
          <h1 className="h3">Servicio no encontrado</h1>
          <p>No existe un servicio con el código "{params.codigo}".</p>
          <Boton texto="Ver servicios" onClick={() => navigate("/servicios")} />
        </Container>
      </PlantillaPrincipal>
    );
  }

  function agregar() {
    solicitud.agregar(servicio);
    setAgregado(true);
  }

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            {agregado && (
              <div className="alert alert-success" role="status">
                Servicio agregado a tu solicitud.
              </div>
            )}
            <DetalleServicio
              servicio={servicio}
              categoriaNombre={obtenerCategoria(servicio.categoria).nombre}
              onAgregar={agregar}
              onVolver={() => navigate(-1)}
            />
          </Col>
        </Row>
      </Container>
    </PlantillaPrincipal>
  );
}

export default DetalleServicioPagina;
