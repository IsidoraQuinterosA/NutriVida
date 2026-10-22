import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import ResultadoSolicitud from "../components/organisms/ResultadoSolicitud";
import { useTituloPagina } from "../hooks/useTituloPagina";

function CitaError() {
  const navigate = useNavigate();
  const ubicacion = useLocation();
  useTituloPagina("Error al registrar la cita");

  const mensaje = ubicacion.state ? ubicacion.state.mensaje : "Ocurrió un problema al registrar tu cita.";

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <ResultadoSolicitud
          exito={false}
          titulo="No pudimos registrar tu cita"
          mensaje={mensaje}
          textoPrincipal="Intentar de nuevo"
          onPrincipal={() => navigate("/confirmar-cita")}
          textoSecundario="Volver a mi solicitud"
          onSecundario={() => navigate("/mi-solicitud")}
        />
      </Container>
    </PlantillaPrincipal>
  );
}

export default CitaError;
