import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import PlantillaPrincipal from "../components/templates/PlantillaPrincipal";
import ListaSolicitud from "../components/organisms/ListaSolicitud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitud } from "../hooks/useSolicitud";

function MiSolicitud() {
  const navigate = useNavigate();
  const solicitud = useSolicitud();
  useTituloPagina("Mi solicitud");

  return (
    <PlantillaPrincipal>
      <Container className="py-5">
        <h1 className="mb-4">Mi solicitud</h1>

        <ListaSolicitud
          items={solicitud.items}
          total={solicitud.total}
          onCambiarCantidad={solicitud.cambiarCantidad}
          onQuitar={solicitud.quitar}
          onLimpiar={solicitud.limpiar}
          onConfirmar={() => navigate("/confirmar-cita")}
          onVerServicios={() => navigate("/servicios")}
        />
      </Container>
    </PlantillaPrincipal>
  );
}

export default MiSolicitud;
