import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import FormularioConfirmacion from "../components/organisms/FormularioConfirmacion";
import ResumenServicios from "../components/organisms/ResumenServicios";
import Boton from "../components/atoms/Boton";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSesion } from "../hooks/useSesion";
import { useSolicitud } from "../hooks/useSolicitud";
import { listarNutricionistas } from "../services/nutricionistasService";
import { crearCita } from "../services/citasService";
import { fechaHoyISO } from "../utils/fechas";

function ConfirmarCita() {
  const navigate = useNavigate();
  const sesion = useSesion();
  const solicitud = useSolicitud();
  useTituloPagina("Confirmar cita");

  const datosIniciales = {
    nombre: sesion.usuario ? sesion.usuario.nombre : "",
    apellidos: sesion.usuario ? sesion.usuario.apellidos : "",
    correo: sesion.usuario ? sesion.usuario.correo : "",
  };

  function alConfirmar(datos) {
    try {
      const cita = crearCita({ ...datos, servicios: solicitud.items, total: solicitud.total });
      solicitud.limpiar();
      navigate("/cita-exitosa", { state: { cita } });
    } catch (error) {
      navigate("/cita-error", { state: { mensaje: error.message } });
    }
  }

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1 className="mb-4">Confirmar cita</h1>

        {solicitud.items.length === 0 ? (
          <>
            <p>No tienes servicios en tu solicitud.</p>
            <Boton texto="Ver servicios" onClick={() => navigate("/servicios")} />
          </>
        ) : (
          <Row>
            <Col xs={12} lg={7} className="mb-4">
              <FormularioConfirmacion
                datosIniciales={datosIniciales}
                nutricionistas={listarNutricionistas()}
                hoy={fechaHoyISO()}
                onEnviar={alConfirmar}
                onVolver={() => navigate("/mi-solicitud")}
              />
            </Col>
            <Col xs={12} lg={5}>
              <h2 className="h5">Resumen</h2>
              <ResumenServicios servicios={solicitud.items} total={solicitud.total} />
            </Col>
          </Row>
        )}
      </Container>
    </PlantillaPrincipal>
  );
}

export default ConfirmarCita;
